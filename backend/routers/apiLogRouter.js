const express = require('express');
const logRouter = express.Router();
const bcrypt = require('bcrypt-nodejs');

const mysql = require('../mysql');

logRouter.use('/', (res, req, next) => {
    next();
});

logRouter.post('/login', (req, res) => {
    const { cmnd, password } = req.body;
    if (!cmnd || !password) {
        res.send({ success: 0, message: 'Bạn chưa nhập số điện thoại hoặc mật khẩu' })
    } else {
        var sql = "SELECT * FROM user WHERE cmnd = ? AND password = ?";
        var values = [cmnd, password];
        mysql.query(sql, values, (err, user, fiels) => {
            if (err) {
                console.log(err)
                res.send({ success: 0, message: 'sai tai khoan' })
            }
            else if (user == 0) res.status(404).send({ success: 0, message: 'Sai sdt hoặc mk' })
            else {
                req.session.user = user;
                // console.log(req.session)
                res.send({ success: 1, message: 'Login success', user })
            }
        })
        // .catch(error => res.status(500).send({ success: 0, error }))
    }

})

logRouter.get('/login', (req, res) => {
    // console.log(req.session)
    if (req.session.user) res.send({ success: 1, message: 'da dang nhap', user: req.session.user });
    else res.send({ success: 0, message: 'session failed' })
})

logRouter.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) res.status(500).send({ success: 0, err })
        else res.send({ success: 1, message: 'Logout success' })
    })
})

module.exports = logRouter;