# Projeto MongoDB Commerce

Modulo 3: Back-end - cruso desenvolvimento web fullstack, na Trybe.

## Para ver o projeto em ação
1. Execute o script de testes do projeto: ./scripts/evaluate.sh

2. Rode os comandos nos arquivos desfaio(1-32).js que estão na pasta `/challenges` em um terminal MongoDB. Ex. **mongosh**

<details>
  <summary>
    <strong>🐳 Como usar o Docker para rodar esse projeto</strong>
  </summary><br>

  - Para quem não possui o MongoDB instalado e está utilizando o docker, é necessário executar os testes localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container, acesse o diretório `/app` mapeado no volume conforme o passo 2;
  > Para restaurar o banco de dados é necessário que você esteja dentro do diretório `/app`. Para mais detalhes, veja o tópico: "♻️ Restaurando o banco de dados `commerce`".
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

---
## Objetivo deste projeto foi:

Nesse projeto, trabalhei com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas.

---
Como aluno eu desenvolvi somente as querys para o banco de dados que estão nos arquivos /challenges/desafio(1-32).js
