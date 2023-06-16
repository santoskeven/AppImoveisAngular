# App para corretor de imoveis Angular

# Olá, é um prazer te-lo em minha aplicação, tentarei lhe guiar da melhor forma possível para usar a aplicação sem problemas, vamos?!!

### vamos considerar que você já tem a base do desenvolvimento com essas ferramentas instaladas em sua máquina (node, typescript, npm...)

# PRIMEIROS PASSOS 

## 1 - instalação do MYSQL

+ primeiramente você pode baixar o instalador <a href="https://dev.mysql.com/downloads/installer/" target="_blank">AQUI</a>
+ após baixar, faça a instalação
  
### passos que eu segui para instalar mysql na minha máquina
+ vá dando **EXECUTE** e **NEXT** e deixe tudo padrão
+ quando chegar em **ACCOUNTS AND ROLES** coloque a senha **123456**
+ vá dando **NEXT** e **EXECUTE**
+ em **CONNECT TO SERVER** apenas coloque a senha **123456** e **NEXT**  

+ quando finalizar feche o prompt que vai abrir e abra o **MYSQL COMMAND LINE CLIENT**
+ coloque a senha criada **123456**

### ok, agora vamos criar os bancos usado no projeto

+ execute **CREATE DATABASE bancoimoveis;** para criar o banco de dados usado no projeto
+ assim que criar o banco execute: ' ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; ' *sem aspas.

### assim que finalizar faça o clone do repositorio em sua maquina 
+ assim que finalizar execute na pasta npm install na pasta FrontEndApp
