# Bicicleta Voadora

Este é um projeto para ajudar meus sobrinhos a aprender a programar.
A idéia é que seja mais auto-didático.
Todos os termos possuem links e devem ser pesquisados.
Para contribuir adicione links na parte [Mais links para aprender](#mais-links-para-aprender)


## O que será ensinado?

+ Como escrever markdown
  + Este documento usa o formato [markdown](https://www.markdowntutorial.com/)
+ Como utilizar o git
  + [Configuração do ssh](https://docs.microsoft.com/en-us/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops)
  + Primeiro commit
    + Execute os comando abaixo 
        ```bash
            git clone git@github.com:dakagui/bicicletavoadora.git
            git commit -am "Meu primeiro commit"
            git push
        ``` 
  + Fazer pull e push
    + Faça pull para pegar as últimas atualizações
    + Faça push para enviar as suas atualizações para o repositório remoto
+ Como utilizar docker

## Linguagem e Ferramentas

+ [Docker](https://docs.microsoft.com/pt-br/dotnet/architecture/microservices/container-docker-introduction/docker-defined)

+ Github Actions

+ Backend - API
  + Python 3.10.1+

+ Frontend
  + [Svelte](https://svelte.dev/tutorial/basics)
    + [SvelteKit](https://kit.svelte.dev/)

## Como rodar o backend
  Execute o [setup](./backend/README.md)

## Como rodar o frontend
  Execute o [setup](./frontend/README.md)  

## Como rodar local
Execute o comando abaixo:
  ```bash
    # iniciar
    make start
  ```
Acesse backend [http://localhost:8080 ](http://localhost:8080)

Acesse frontend [http://localhost:3000](http://localhost:3000)

  ```bash
    # parar 
    make stop 
  ```

## Mais links para aprender

## Autores
+ Vinicius
+ Caio Kenji
+ Dani