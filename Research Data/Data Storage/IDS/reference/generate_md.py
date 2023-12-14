#!/usr/bin/env python3

import pkgutil

modules = [module.name for module in pkgutil.iter_modules(['src'])]
print(modules)

for module in modules:
    with open(f"{module}.md", "w") as f:
        f.write(f"# {module}\n\n")
        f.write(f"::: src.{module}\n\n")