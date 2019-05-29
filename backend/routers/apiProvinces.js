const express = require('express');
const provincesRouter = express.Router();
const mysql = require('../mysql');

provincesRouter.get('/', (req, res) => {
    mysql.query("SELECT * FROM provinces", (err, result) => {
        if (err) console.error(err)
        else (res.send(result))
    })
})

module.exports = provincesRouter;