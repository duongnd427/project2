const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const mysql = require('../mysql');
// const UserModel = require('../models/userModel');

userRouter.use('/', (req, res, next) => {
    next()
})

userRouter.get('/', (req, res) => {
    mysql.query("SELECT * FROM user", (err, result) => {
        if (err) console.error(err);
        res.send(result);
        console.log(result)
    })
})

userRouter.post('/', (req, res) => {
    const { phone, name, password } = req.body;
    var sql = "INSERT INTO user (phone, name, password) VALUES ?";
    var values = [[ phone, name, password ]];
    mysql.query(sql, [ values ], (err, userCreated) => {
        if(err) {console.error(err);
        console.log('loi')}
    })
})

// userRouter.get('/', async (req, res) => {
//     try {
//         let userFound = await 
//     }
// })

module.exports = userRouter;