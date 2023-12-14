#!/usr/bin/env python3

from glob import glob
import os
import re

files = sorted(glob("*.md"))

for filename in files:
  with open(filename, "r") as f:
    content = f.read()
  matches = list(re.finditer(r'/cer-documentation/assets/', content))
  if matches:
    print(filename)
    page_id = os.path.splitext(filename)[0]
    print(len(matches))
    for match in matches:
      #![useful image](./cer-documentation/assets/filezilla.png){:width="600px"}
      corrected_path = f"./cer-documentation/assets/{page_id}{match.group(1)}"
      print(match.group(0), corrected_path)
      content = content.replace(match.group(0), corrected_path)
    with open(filename, "w") as f:
      f.write(content)