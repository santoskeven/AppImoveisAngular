const express = require('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/signup',(req, res) => {
    let user = req.body;
    query = "select email, password, role, status from user where email=?"
    connection.query(query, [user.email], (err, results) => {
        if(!err){
            if(results.length <= 0){
                query = "INSERT INTO user (name, contactNumber, email, password, status, role) VALUES  (?, ?, ?, ?, 'false', 'user')" 
                connection.query(query, [user.name, user.contactNumber, user.email, user.password], (err, results) => {
                    if(!err){
                        return res.status(200).json({message: "email registrado com sucesso"});

                    }
                    else{
                        return res.status(500).json(err);
                    }
                }); 
            }
            else{
                return res.status(400).json({message: "Email já existe!!!"});
            }
        }
        else{
            return res.status(500).json(err);
        }
    });

});

router.post('/login', (req, res) => {
    const user = req.body;
    query = "select email, password, role, status from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        if(!err){
            if(results.length <= 0 || results[0].password != user.password){
                return res.status(401).json({message: "Usuário ou senha incorretos"});
            }
            else if(results[0].status === 'false'){
                return res.status(401).json({message: "aguarde a aprovação do administrador"});
            }
            else if(results[0].password == user.password){
                const response = {email: results[0].email, role: results[0].role}
                const acesssToken = jwt.sign(response, process.env.ACESS_TOKEN,{expiresIn:'8h'});
                res.status(200).json({token: acesssToken});
            }
            else{
                return res.status(400).json({message: "algo deu errado por favor tente novamente mais tarde"});
            }
        }else{
            return res.status(500).json(err);
        }
    });
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

router.post('/forgotPassword', (req, res) => {
    const user = req.body;
    query = 'select email, password from user where email=?';
    connection.query(query, [user.email], (err, results) => {
        if(!err){
            if(results.length <= 0){
                return res.status(200).json({message: 'senha enviada com sucesso para o seu email (top)'});
            }
            else{
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].email,
                    subject: 'senha pelo sistema de gerenciamento de banco de imoveis',
                    html: '<p> <br>seus detalhes de login para o sistema de gerenciamento de café</br> <br> <br>Email:</br> '+results[0].email+' <br> <br>senha:</br> '+results[0].password+' <br> <a href="http://localhost:4200/user/login">Click aqui para fazer login</a>  </p>'
                }

                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log('Email enviado:' +info.response);
                    }
                });

                return res.status(200).json({message: 'senha enviada com sucesso para o seu email (bottom)'});

            }
        }
        else{}
    });
})



module.exports = router;    