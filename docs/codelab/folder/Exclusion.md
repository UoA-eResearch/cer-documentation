---
codelab: false
author: "Anonymous Penguin"
title: Exclusion test
hide:
  - tabs
---

## Getting started {: step duration="2:00" }

By default, the codelab considers a H2 heading as a new step.

Bare minimum **\*.md** codelab page:

```markdown
---
codelab: true
---

# My Lab's Title

## This becomes Step 1

Hello world

## This becomes Step 2

Blah blah

```

## YAML frontmatter

Explicitly set a title, author and date. The date can also be rendered with [git revision date](https://squidfunk.github.io/mkdocs-material/setup/adding-a-git-repository/#revision-date).

```markdown
---
title: Example Workshop
author: "Anonymous Penguin"
revision_date: 2022-01-10
report_bugs: http://endless.horse/
codelab: true
---

## This becomes Step 1

Hello world

## This becomes Step 2

Blah blah
```

### Hide tabs

If you have the [tabs feature](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/#navigation-tabs) enabled, you can hide tabs on a particular page:

```
---
hide:
  - tabs
---
```

## Auto Numbering


In **mkdocs.yml**:

```yaml
plugins:
  - codelab:
      auto_number: true # Whether to auto-number sections
```

Headings will automatically be numbered, and wrong numbers will be corrected according to their logical order.

## 2. Setting a custom delimeter

In **mkdocs.yml**, enable [attr_list](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown/?h=attr#attribute-lists) extension:

```yaml
markdown_extensions:
  - attr_list

plugins:
  - search
  - codelab:
      delimiter: '[step]'
```

The `delimiter` is a CSS selector.

Then in a markdown page, assign an attribute to a heading.

```markdown
---
codelab: true
author: Anonymous Penguin
---

# My Lab's Title

## This becomes Step 1 { step }

Hello world

## This becomes Step 2 { step }

Blah blah

# This doesn't count

Using more than one H1 is not recommended, but the plugin can handle it.

## This doesn't count

Just in case

## Here is another step { step=3 }

This will be step 3

```

Additional examples:

=== "One"

    Mkdocs config:

    ```yaml
    plugins:
      - codelab:
          delimiter: 'h2.my-class'
    ```

    Markdown:

    ```markdown
    ---
    codelab: true
    author: Anonymous Penguin
    title: My Lab
    ---

    ## This becomes Step 1 { .my-class }

    Hello world

    ## This becomes Step 2 { .my-class }

    Blah blah

    ### H3 won't be a step { .my-class}

    Using more than one H1 is not recommended, but the plugin can handle it.

    ```

## Printing { step=2 duration="2:00" }

The theme is configured to have a print version. Press ++ctrl+p++ to take a look.

##  I really cannot { step duration="2:00" } 

Eu lobortis elementum nibh tellus molestie nunc. At auctor urna nunc id. Ac turpis egestas sed tempus urna et pharetra. Blandit cursus risus at ultrices mi tempus imperdiet. Nisi vitae suscipit tellus mauris a diam maecenas sed. Amet volutpat consequat mauris nunc. Orci phasellus egestas tellus rutrum tellus pellentesque. Odio morbi quis commodo odio. Molestie a iaculis at erat pellentesque adipiscing commodo. Nibh praesent tristique magna sit amet purus gravida quis blandit. Etiam erat velit scelerisque in dictum non consectetur a. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Eget aliquet nibh praesent tristique magna. Etiam dignissim diam quis enim lobortis scelerisque fermentum.

- [Google](https://www.google.com)


## Finishing Touches { step duration="2:00" } 

Test

### References

- [Google](https://www.google.com)
- [Google](https://www.google.com)
- [Google](https://www.google.com)