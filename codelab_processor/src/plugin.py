import sys
import string
import regex
import markdown
import jinja2
from jinja2.utils import markupsafe 
from lxml import etree, html, cssselect
from io import StringIO
from mkdocs.plugins import BasePlugin
from mkdocs.config import config_options
from mkdocs.structure.toc import TableOfContents

PARSER = etree.HTMLParser(recover=True)
select_about = cssselect.CSSSelector("#codelab-about")
select_first_step = cssselect.CSSSelector('[data-step="1"]')
H = regex.compile(r'(?:\d+\p{P})*(.*)')

def markdown_filter(value):
    return markupsafe.Markup(markdown.markdown(value))

def add_section_number(number, title):
    m = H.match(title)
    return f"{number}. {m.group(1)}"

def flatten(listo):
    nl = []
    for o in listo:
        nl.append(o)
        if len(o.children) <= 0:
            continue
        nl.extend(flatten(o.children))
        o.children = []
    return nl

class CodelabPlugin(BasePlugin):
    config_scheme = (
        ('step_element', config_options.Type(str, default='section')),
        ('step_class', config_options.Type(str, default='labstep')),
        ('delimiter', config_options.Type(str, default='h2')),
        ('auto_number', config_options.Type(bool, default=False)),
        # ('global', config_options.Type(bool, default=False))
    )

    def on_env(self, env, config, files):
        env.filters['md'] = markdown_filter
        return env

    def on_page_content(self, phtml, page, config, files, **kwargs):
        if (not 'codelab' in page.meta):
            if 'global' in config['theme'] and config['theme']['global'] == True:
                if page.is_index:
                    return phtml
                else:
                    page.meta['codelab'] = True
            else:
                return phtml
        elif page.meta['codelab'] == False:
            return phtml
        
        flat_toc = flatten(page.toc)
        select_delimiter = cssselect.CSSSelector(self.config['delimiter'])
        elements = html.fragments_fromstring(phtml, no_leading_text=True, parser=PARSER)
        newSections = []
        newInstr = []
        delim_titles = []
        index = -1
        for element in elements:
            if element.tag == 'h1' and page.title == element.text:
                continue
            #print("%s - %s" % (element.tag, element.text))
            #if element.tag == self.config['delimiter']:
            if len(select_delimiter(element)) > 0:
                index += 1
                delim_titles.append(element.text)
                element.set("class", "step-title")
                # Create <section>
                sec = etree.Element(self.config['step_element'])
                sec.set("class", self.config['step_class'])
                sec.set("data-step", str(index + 1))
                # Create <div>
                instr = etree.Element('div')
                instr.set("class", 'instructions')
                newInstr.append(instr)
                sec.append(instr)

                if index == 0:
                    sec.set("selected","")
                if self.config['auto_number']:
                    element.text = add_section_number(index + 1, element.text)
                instr.append(element)
                newSections.append(sec)
            elif index >= 0:
                newInstr[index].append(element)
            else:
                newSections.append(element)
        results = map(lambda x: etree.tostring(x), newSections)

        def filterF(anchor):
            if (anchor.title in delim_titles):
                m = H.match(anchor.title)
                anchor.title = m.group(1)
                return True
            return False
        
        tocs = filter(filterF, flat_toc)
        newToc = TableOfContents(list(tocs))
        page.toc = newToc
        return str(b"".join(results), 'UTF-8')

    def on_post_page(self, output, page, config):
        if (not "codelab" in page.meta or page.meta["codelab"] == False):
            return output
        # Put about box inside first section
        doc = html.fromstring(output, parser=PARSER)
        aboutDiv = select_about(doc)[0]
        [section.insert(0, aboutDiv) for section in select_first_step(doc)]
        return html.tostring(doc, encoding='unicode', method='html')
