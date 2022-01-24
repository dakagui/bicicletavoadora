SHELL := /bin/bash

start:
	@docker-compose up --detach --renew-anon-volumes --build --force-recreate

stop:
	@docker-compose down	
