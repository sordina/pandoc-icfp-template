
all:
	pandoc -V title:"Welcome to the test" --template=template.html test.md -o test.html
