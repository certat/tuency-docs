compile-deps:
	pip-compile requirements.in

install:
	pip install -r requirements.txt

serve:
	mkdocs serve

build:
	mkdocs build
	-rm docs.zip
	cd site/ && zip -r ../docs.zip ./*