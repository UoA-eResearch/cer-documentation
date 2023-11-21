from setuptools import setup, find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name='mkdocs-codelab-plugin',
    version='0.0.3',
    packages=find_packages(),
    url='',
    license='MIT',
    author='Abby Gale',
    author_email='',
    description="Create codelab-style pages.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    python_requires='>=3.7',
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Development Status :: 3 - Alpha"
    ],
    install_requires=[
        'mkdocs>=1.0.4',
        'lxml>=4.7.1',
        'regex>=2021.11.10'
    ],
    entry_points={
        'mkdocs.plugins': [
            'codelab = src.plugin:CodelabPlugin'
        ]
    },
)

