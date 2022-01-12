SHELL := /bin/bash

start:
	@docker-compose up --detach --renew-anon-volumes --build

stop:
	@docker-compose down	
