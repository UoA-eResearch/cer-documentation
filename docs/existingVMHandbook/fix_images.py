#!/usr/bin/env python3

from glob import glob
import os
import re

files = sorted(glob("*.md"))

for filename in files:
  with open(filename, "r") as f:
    content = f.read()
  matches = list(re.finditer(r'{{ "/assets" \| append: page.id \| append: "(.+)" \| absolute_url }}', content))
  if matches:
    print(filename)
    page_id = os.path.splitext(filename)[0]
    print(len(matches))
    for match in matches:
      #![useful image](../assets/doc/copy-file-linux/filezilla.png){:width="600px"}
      corrected_path = f"../assets/doc/{page_id}{match.group(1)}"
      print(match.group(0), corrected_path)
      content = content.replace(match.group(0), corrected_path)
    with open(filename, "w") as f:
      f.write(content)