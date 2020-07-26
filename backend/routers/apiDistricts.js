const express = require('express');
const districtsRouter = express.Router();
const mysql = require('../mysql');

districtsRouter.get('/', (req, res) => {
    mysql.query("SELECT * FROM districts", (err, result) => {
        if (err) console.error(err)
        else (res.send(result))
    })
})

module.exports = districtsRouter;