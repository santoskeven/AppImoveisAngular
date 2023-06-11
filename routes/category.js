const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');
const { route } = require('..');

router.post('/add', auth.authenticateToken, checkRole.checkRole, (req, ress, next) => {
    let categoty = req.body;
    query = "insert into category (name) values(?)";
    connection.query(query, [categoty.name], (err, results) => {
        if(!err){
            return ress.status(200).json({message: "Categoria adicionada com sucesso"});
        }
        else{
            return ress.status(500).json(err);
        }
    })
})

router.get('/get', auth.authenticateToken, (req, ress, next) => {
    let categoty = req.body;
    query = "select *from category order by name";
    connection.query(query, (err, results) => {
        if(!err){
            return ress.status(200).json(results);
        }
        else{
            return ress.status(500).json(err);
        }
    });
});

router.patch('/update', auth.authenticateToken, checkRole.checkRole, (req, ress, next) => {
    let product = req.body;
    var query = "update category set name=? where id=?";
    connection.query(query, [product.name, product.id], (err, results) => {
        if(!err){
            if(results.affectedRows = 0){
                return ress.status(404).json({message: "Categoria não existe"});
            }
            return ress.status(200).json({message: "Categoria modificada com sucesso"})
        }
        else{
            return ress.status(500).json(err)
        }
    });
});

module.exports = router;