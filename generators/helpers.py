def findFileWithExtension(files, ext):
	for file in files:
		if file.endswith(ext): return file
	return None