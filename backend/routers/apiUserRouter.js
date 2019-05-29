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
        // console.log(result)
    })
})

userRouter.post('/', (req, res) => {
    const { cmnd, name, password, repassword } = req.body;
    if (cmnd == null || name == null || password == null || repassword == null) res.send({ success: -1, message: 'thieu truong' })
    if(password != repassword) {
        res.send({success: 0, message:'sai mat khau'})
    }
    else {
        var sql = "INSERT INTO user (cmnd, name, password) VALUES ?";
        var values = [[cmnd, name, password]];
        mysql.query(sql, [values], (err, userCreated) => {
            if (err) {
                console.log(err);
                res.send({ success: 0, message: 'sdt da duoc sd' })
            } else {
                res.send({ success: 1, message: 'Tạo tài khoản thành công' })
            }
        })
    }
})

// userRouter.get('/', async (req, res) => {
//     try {
//         let userFound = await 
//     }
// })

module.exports = userRouter;