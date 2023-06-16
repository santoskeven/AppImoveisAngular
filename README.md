# App para corretor de imoveis Angular

# Olá, é um prazer te-lo em minha aplicação, tentarei lhe guiar da melhor forma possível para usar a aplicação sem problemas, vamos começar?!!

### vamos considerar que você já tem a base do desenvolvimento com essas ferramentas instaladas em sua máquina (node, typescript, npm...)

# PRIMEIROS PASSOS 

## 1 - instalação do MYSQL

+ primeiramente você pode baixar o instalador <a href="https://dev.mysql.com/downloads/installer/" target="_blank">AQUI</a>
+ **OBS**: a versão que eu fiz a instação é a **(mysql-installer-community-8.0.33.0.msi)**, não tenho total certeza se na versão **(mysql-installer-web-community-8.0.33.0.msi)** ficará a mesma coisa ou se vai funcionar corretamente.
+ após baixar, faça a instalação
  
### passos que eu segui para instalar mysql na minha máquina
+ vá dando **EXECUTE** e **NEXT** e deixe tudo padrão
+ quando chegar em **ACCOUNTS AND ROLES** coloque a senha **123456**
+ vá dando **NEXT** e **EXECUTE**
+ em **CONNECT TO SERVER** apenas coloque a senha **123456** e **NEXT**  

+ quando finalizar feche o prompt que vai abrir e abra o **MYSQL COMMAND LINE CLIENT**
+ coloque a senha criada **123456**

## 2 - ok, agora vamos criar o DATABASE e as TABELAS usadas no projeto

+ para criar o banco de dados usado no projeto execute no **MYSQL COMMAND LINE CLIENT**:
```
CREATE DATABASE bancoimoveis;
``` 
### **ok, database criada, agora vamos criar as tables usadas**
### para criar a tabela de usuário execute:
```
CREATE TABLE user (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20)
);
```
### para cricar a tabela de categoria execute:
```
CREATE TABLE category (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(250) NOT NULL  
);
```

### para criar a tabela de produtos execute:
```
CREATE TABLE products(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(250),
    categoryID integer NOT NULL,
    description varchar(255),
    price integer,
    amount integer,
    status varchar(20)
);
```
### ok, por ultimo execute: 
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

### assim que finalizar faça o clone do repositorio em sua maquina 
+ assim que finalizar execute na pasta npm install na pasta FrontEndApp
