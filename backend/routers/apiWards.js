const express = require('express');
const wardsRouter = express.Router();
const mysql = require('../mysql');

wardsRouter.get('/', (req, res) => {
    mysql.query("SELECT * FROM wards", (err, result) => {
        if (err) console.error(err)
        else (res.send(result))
    })
})

module.exports = wardsRouter;