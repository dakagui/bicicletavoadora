SHELL := /bin/bash

init:
	@cd backend
	@poetry config virtualenvs.in-project true --local
	@poetry install


start:
	@docker-compose up --detach --renew-anon-volumes

stop:
	@docker-compose down	
