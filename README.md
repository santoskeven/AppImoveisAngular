# App para corretor de imoveis Angular

# Olá, é um prazer te-lo em minha aplicação, tentarei lhe guiar da melhor forma possível para usar a aplicação sem problemas, vamos começar?!!

### vamos considerar que você já tem a base do desenvolvimento com essas ferramentas instaladas em sua máquina (node, typescript, npm...)

# PRIMEIROS PASSOS 

## 1 - instalação do MYSQL

+ primeiramente você pode baixar o instalador <a href="https://dev.mysql.com/downloads/installer/" target="_blank">AQUI</a>
+ **OBS**: a versão que eu fiz a instação é a **(mysql-installer-community-8.0.33.0.msi)**, não tenho total certeza se na versão **(mysql-installer-web-community-8.0.33.0.msi)** ficará a mesma coisa ou se vai funcionar corretamente.
+ após baixar, faça a instalação
  
### passos que eu segui para instalar mysql na minha máquina:
+ quando abrir o isntalador em **CHO0SING A SETUP TYPE** deixe a opçao **DEVELOPER DEFAULT** selecionada e click em **NEXT**
+ em **DOWNLOADS** clck em **EXECUTE** e aguarde, após finalizado click em **NEXT**
+ em **INSTALLATION** click em **EXECUTE** e aguarde a instalação, após finalizar click em **NEXT**
+ em **PRODUCT CONFIGURATION** click em **NEXT**
+ em **TYPE AND NETWORKING** apenas click em **NEXT**
+ em **AUTHENTICATION METHOD** apenas click em **NEXT**
+ em **ACOUNTS AND ROLES** coloque a **mysql root password** como **123456**, e click em **NEXT**
+ em **WINDOWS SERVICE** apenas click em **NEXT**
+ em **SERVER FILE PERMISSIONS** apenas click em **NEXT**
+ em **APLLY CONFIGURATION** click em **EXECUTE**, após finalizar click em **FINISH**
+ em **PRODUCT CONFIGURATION** apenas click em **NEXT**
+ em **MYSQL ROUTER CONFIGURATION** apenas click em **FINISH**
+ em **PRODUCT CONFIGURATION** apenas click em **NEXT**
+ em **CONNECT TO SERVER** em **password** insira a senha **123456** e click em **CHECK** e cilck em **NEXT**
+ em **APLLY CONFIGURATION** click em **EXECUTE**, após finalizar click em **FINISH**
+ em **PRODUCT CONFIGURATION** apenas click em **NEXT**
+ em **INSTALATON COMPLETE** desmarque a opção **start mysql workbench after sutup** e **start mysql Shell after setup**
### apos finalizada a instalação abra o **MYSQL COMMAND LINE CLIENT**
+ insira a senha criada **123456**, e pronto, etapa finalizada, agora vamos dar seguencia...

## 2 - ok, agora vamos criar o DATABASE e as TABELAS usadas no projeto

+ para criar o banco de dados usado no projeto execute no **MYSQL COMMAND LINE CLIENT**:
```
CREATE DATABASE bancoimoveis;
``` 
### **ok, database criada, agora vamos criar as tables usadas**
+ antes de criar as tabelas execute:
```
use bancoimoveis;
```
### ok, agora vamos lá...
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

### blzz, mais uma estapa concluída, agora vamos para a proxima etapa

## 2 - agora vamos clonar o repositorio do projeto

