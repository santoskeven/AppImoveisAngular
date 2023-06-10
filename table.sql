CREATE TABLE user (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20)
);

insert into user(name, contactNumber, email, password, status, role) value('keven', '992957686', 'r.kevensantos7@gmail.com', '123456', 'true', 'admin');