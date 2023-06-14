const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
const { route } = require('./category');

router.post('/add', auth.authenticateToken, checkRole.checkRole, (req, res) => {
    let product = req.body;
    var query = "insert into products (name, categoryID, description, price, amount, status) values(?, ?, ?, ?, ?, 'true' )";
    connection.query(query, [product.name, product.categoryID, product.description, product.price, product.amount], (err, results) => {
        if(!err){
            return res.status(200).json({message: "produto adicionado com sucesso."})
        }
        else{
            res.status(500).json(err)
        }
    });
});

router.get('/get', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    var query = "select p.id, p.name, p.description, p.price, p.status, p.amount, c.id as categoryID, c.name as categoryName from  products as p INNER JOIN category as c where p.categoryID = c.id";
    connection.query(query, (err, results) => {
        if(!err){
            return res.status(200).json(results)
        }
        else{
            return res.status(500).json(err)
        }
    });
});

router.get('/getByCategory/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    var query = "select id, name from products  where categoryID = ? and status = 'true'";
    connection.query(query, [id], (err, results) => {
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.get('/getById/:id', auth.authenticateToken, (req, res, next) => {
    const id = req.params.id;
    var query = "select id, name, description, price, amount from products where id = ?";
    connection.query(query, [id], (err, results) => {
        if(!err){
            return res.status(200).json(results[0]);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.patch('/update', auth.authenticateToken, checkRole.checkRole, (req, res, nex) => {
    let product = req.body;
    var query = "update products set name=?, categoryID=?, description=?, price=?, amount=? where id=?";
    connection.query(query, [product.name, product.categoryID, product.description, product.price, product.amount, product.id], (err, results) => {
        if(!err){
          if(results.affectedRows == 0){
                return res.status(404).json({message: "O produto não existe."})
            } 
            return res.status(200).json({message: "protudo atualizado com sucesso."})
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.delete('/delete:id/', auth.authenticateToken, checkRole.checkRole, (err, res, next) => {
    const id = rep.params.id;
    var query = "delete from produts where id=?";
    connection.query(query, [id], (err, results) => {
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message: "não existe produto com este id"});
            }
            return res.status(200).json({message: "produto deletado com sucesso"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.patch('/updateStatus', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    const user = req.body;
    var query = "update products set status = ? where id = ?";
    connection.query(query, [user.status, user.id], (err, results) => {
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message: "não existe produto com esse id"});
            }
                return res.status(200).json({message: "status do produto alterado com sucesso"}); 
        }
        else{
            return res.status(500).json(err);
        }
    })
})

module.exports = router;

