SHELL := /bin/bash

init:
	@poetry config virtualenvs.in-project true --local
	@poetry install

start:
	@uvicorn --app-dir app main:app --reload

test:
	@poetry run pytest
