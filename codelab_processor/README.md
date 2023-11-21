# MkDocs Codelab Plugin

This plugin automatically converts MkDoc pages to have the proper HTML elements for a codelab.

## Config

```yaml
plugins:
  - codelab:
      # Wrapper HTML element such as <section></section>
      step_element: 'section' # default 'section',
      # assigns a class to the element
      step_class: 'labstep' # default: labstep
      # CSS selector used to distinguish between step passages
      delimiter: 'h2' # default 'h2' which corresponds to Markdown H2 (##)
      auto_number: false # Whether to auto-number sections
```