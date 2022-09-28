# Instruções iniciais
O primeiro passo, caso queira já colocar no Github é criar um novo repositório. Após isso, fazer o clone do projeto na máquina que será realizado o exercício. Exemplo:
> git clone https://github.com/augustocolombelli/node-challenges

É necessário ter o Node instalado, rodar ```node -v```. Instalar caso não tenha esteja instalado.

É necessário instalar o Yarn. Verificar com ```yarn -v ```. Instalar caso necessário.

Para facilitar um pouco e abstrair alguns conceitos mais técnico do Node, vamos utilzar o express. Um framework node com algumas features que vão facilitar o nosso trabalho. Mais detalhes em https://expressjs.com/. Sendo assim, criar o projeto utilizando o mesmo nome do repo com o comando:
> npx express-generator --no-view node-challenges

Adicionar o .gitignore no projeto. Se não tiver, utilizar o desse projeto.

Com isso pronto, agora é necessário instalar as dependências. Para isso:
> npm install 

Como vamos praticar com TDD, é necessário instalar a biblioteca de teste, para isso:
> npm install -D jest supertest

Nesse momento, tudo é para estar funcionando. Sendo assim, rodar os testes. Como não tem nenhum, vai só rodar os testes sem nada.
> npm test

A partir daqui se inicia o exercício. Criar teste a teste já o fazendo passar.