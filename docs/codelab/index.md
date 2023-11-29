---
hide:
  - toc
---

# Challenges

- Confronting a *learner* (or any person seeking help) with one **wall of text** is likely to be confronting.
- This presented solution (i.e., [MkDocs Material Theme](https://squidfunk.github.io/mkdocs-material/)) originates from writing smaller-scale tutorials or Code References.
- For some but not all anticipated documentation items, smaller and more digestible to be consumed in a linear fashion are needed
  - Nectar Tutorials are a good example

# Identified solution

- Instead of creating such a solution from scratch or developing an implementation/Plug-In, we can use [Google Codelabs](https://github.com/googlecodelabs/tools)).


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

