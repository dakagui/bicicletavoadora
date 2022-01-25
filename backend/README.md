## Backend setup

  + [Python 3.10.1](https://python.land/python-tutorial)
    + Utilizar [pyenv](https://github.com/pyenv/pyenv) para genrenciar versões de python
      + Instalar no [windows](https://github.com/pyenv-win/pyenv-win)
      + Instalar no [linux](https://realpython.com/intro-to-pyenv/)
        + Adicionar ao .bashrc
        ```bash
            # pyenv
            export PYENV_ROOT="$HOME/.pyenv"
            export PATH="$PYENV_ROOT/shims:$PATH"
            if which pyenv-virtualenv-init > /dev/null; then eval "$(pyenv virtualenv-init -)"; fi
            #if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi

            export PATH="$PYENV_ROOT/bin:$PATH"
            if command -v pyenv 1>/dev/null 2>&1; then
            eval "$(pyenv init -)"
            fi
        ```
    + Instalar python
    ```bash
        pyenv install 3.10.1
        pyenv local 3.10.1
    ```
    + Instalar [poetry](https://python-poetry.org/docs/master/#installing-with-the-official-installer)
  
## Como rodar backend
Execute o comando abaixo:

      make start

## Como contribuir

* Sempre adicionar testes e rodar `make test`