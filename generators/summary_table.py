import os
import re
import json
import os.path as path

from helpers import findFileWithExtension

# Markdown table generators
rowGenerator = lambda buttonPath, previewPath, name, description: f'| [ ![{description}]({previewPath})]({buttonPath}) | [{name}]({buttonPath}) | {description} |'
# Markdown table constants
tableHeader = '''\
| Preview | Link | Description |
| --- | --- | --- |'''

# Initialization
rows = {}
generatedMarkdown = tableHeader + '\n'

mini = 1
maxi = 0

rootPath = '..'
buttonsPath = path.join(rootPath, 'buttons')

pathRegex = re.compile(r'^\./buttons/(\d+)-.*$')

buttonFolders = [folderPath[0] for folderPath in os.walk(buttonsPath)][1:]
for folderPath in buttonFolders:
	# Find json file
	files = [filePath[2] for filePath in os.walk(folderPath)][0]
	jsonName = findFileWithExtension(files, 'json')
	jsonPath = path.join(folderPath, jsonName)

	# Extract name and description from json file
	with open(jsonPath, 'r') as jsonFile:
		jsonDict = json.loads(jsonFile.read())
		name, description = jsonDict.values()

	# Create file path relative to README.md (which is in rootPath)
	folderPath = folderPath.replace(rootPath, '.')
	# Generate a row for README.md using all above data
	previewPath = path.join(folderPath, 'preview.webp')

	num = re.match(pathRegex, folderPath).group(1)
	buttonLink = f'https://uibuttons.co/shop/{num}'

	rows[num] = rowGenerator(buttonLink, previewPath, name, description)

	# Set max
	if int(num) > maxi:
		maxi = int(num)

for num in range(mini, maxi+1):
	generatedMarkdown += rows[f'{num}'] + '\n'

# Final output
with open('summary_table.md', 'w') as f:
	f.write(generatedMarkdown)