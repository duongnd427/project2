const express = require('express');
const absentRouter = express.Router();

const mysql = require('../mysql');
const AbsentModel = require('../models/absentModel');

absentRouter.get('/', (req, res) => {
    mysql.query("SELECT * FROM absent", (err, result) => {
        if (err) console.error(err);
        // console.log(result)
        res.send(result)
    });
});

// absentRouter.post('/', (req, res) => {
//     AbsentModel.con.query()
// })

module.exports = absentRouter;