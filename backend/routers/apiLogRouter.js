const express = require('express');
const logRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const mysql = require('../mysql');

logRouter.use('/', (res, req, next) => {
    next();
});

logRouter.post('/login', (req, res) => {
    const { phone, password } = req.body;
    const sql = "SELECT * FROM user WHERE phone = ? AND password = ?";
    if (!phone || !password) {
        res.status(400).send({ success: 0, message: 'Bạn chưa nhập số điện thoại hoặc mật khẩu' })
    } else {
        mysql.query(sql, [ phone, password ], (err, user, fiels) => {
            if (err) console.error(err)
            else if (!user) res.status(404).send({ success: 0, message: 'Sai sdt hoặc mk' })
            else {
                req.session.user = { name: user.name }
                res.send({ success: 1, message: 'Login success', user})
            }
        })
        // .catch(error => res.status(500).send({ success: 0, error }))
    }

})

logRouter.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) res.status(500).send({ success: 0, err})
        else res.send({ success: 1, message: 'Logout success' })
    })
})

module.exports = logRouter;