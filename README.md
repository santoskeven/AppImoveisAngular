# App para corretor de imoveis Angular

# Olá, é um prazer te-lo em minha aplicação, tentarei lhe guiar da melhor forma possível para usar a aplicação sem problemas, vamos?!!

### vamos considerar que você já tem a base do desenvolvimento com essas ferramentas instaladas em sua máquina (node, typescript, npm...)

# PRIMEIROS PASSOS 

## 1 - instalação do MYSQL

+ primeiramente você pode baixar o instalador <a href="https://dev.mysql.com/downloads/installer/" target="_blank">AQUI</a>
+ após baixar, faça a instalação
  
### passos que eu segui para instalar mysql na minha máquina
+ vá dando EXECUTE E NEXT e deixe tudo padrão
+ quando chegar em ACCOUNTS AND ROLES coloque a senha 123456
+ vá dando NEXT E EXECUTE
+ em connect to server apenas coloque a senha 123456 e next

+ quando finalizar feche o prompt que vai abrir e abra o MYSQL COMMAND LINE CLIENT
+ execute isso : ' CREATE DATABASE bancoimoveis; ' *sem as aspaspara. criar o banco de dados usado no projeto
+ assim que criar o banco execute: ' ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; ' *sem aspas.

### assim que finalizar faça o clone do repositorio em sua maquina 
+ assim que finalizar execute na pasta npm install na pasta FrontEndApp



PARA TESTAR DE FORMA INDIVIDUAL A API BACK AND BASTA TER INSTALADO O MYSQL E CRIAR AS TABELAS QUE ESTÃO NO ARQUIVO "TABLE.SQL"

EM ADIANTE TENHA O POSTMAN PARA FAZER OS TESTES.

URL DE BASE É localhost:8080/ 

irei disponibilizar em breve tudo bem exolicado como usar de maneira simples e rápida
