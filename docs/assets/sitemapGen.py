import os
import pandas as pd
import yaml
import re

def read_markdown_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Extract YAML front matter using regex
    match = re.match(r'^---\n(.*?\n)---', content, re.DOTALL)
    if match:
        yaml_content = match.group(1)
        data = yaml.safe_load(yaml_content)
        title = data.get('title', 'No Title')
        categories = data.get('categories', [])
    else:
        title, categories = 'No Title', []

    return {'Title': title, 'Categories': ', '.join(categories)}

def process_directory(directory):
    result_list = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                metadata = read_markdown_file(file_path)
                metadata['Path'] = os.path.relpath(file_path, directory)  # Include the relative path
                result_list.append(metadata)

    return result_list

def main():
    input_directory = '../'  # Replace with your directory path
    output_excel_file = 'output.xlsx'

    data = process_directory(input_directory)

    # Create a DataFrame using pandas
    df = pd.DataFrame(data)

    # Write DataFrame to Excel
    df.to_excel(output_excel_file, index=False)
    print(f"Results written to {output_excel_file}")

if __name__ == "__main__":
    main()
