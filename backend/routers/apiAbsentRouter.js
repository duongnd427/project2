const express = require('express');
const absentRouter = express.Router();

const mysql = require('../mysql');


absentRouter.post('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    const { ward, name, dateOfBirth, sex, nationality, CMND, passport, shelter, dateStart, dateEnd, reason } = req.body;
    if(passport == '') {
        var sql = "INSERT INTO absent ( ward, name, dateOfBirth, sex, nationality, CMND,  shelter, dateStart, dateEnd, reason, owner ) VALUES ?";
        var values = [ ward, name, dateOfBirth, sex, nationality, CMND, shelter, dateStart, dateEnd, reason, owner]
    } else {
        var sql = "INSERT INTO absent ( ward, name, dateOfBirth, sex, nationality, CMND, passport, shelter, dateStart, dateEnd, reason, owner ) VALUES ?";
        var values = [ ward, name, dateOfBirth, sex, nationality, CMND, passport, shelter, dateStart, dateEnd, reason, owner]
    }
    if (name == null || dateOfBirth == null || sex == null || nationality == null || CMND == null || shelter == null || dateStart == null || dateEnd == null || reason == null || owner == null || ward == null)
        res.send({ success: 0, message: 'thieu thong tin' })
    else {        
        mysql.query(sql, [[values]]), (err, absentCreated) => {
            if (err) {
                console.log('eee');
                res.status(404).send({ success: 0, message: 'thieu thong tin' })
            } else {
                res.status(200).send({ success: 1, message: 'thành công' })
                console.log('ddd')
            }
        };
    }
});

absentRouter.get('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    var sql = "SELECT * FROM absent WHERE owner = ?"
    var value = [owner]
    mysql.query(sql, [value], (err, result) => {
        if (err) console.error(err);
        else res.send(result)
    });
});

absentRouter.put('/', (req, res) => {
    const { idabsent, ward, name, dateOfBirth, sex, nationality, CMND, passport, shelter, dateStart, dateEnd, reason } = req.body;
    if(passport == '') {
        var sql = "UPDATE absent SET ward = ?, name = ?, dateOfBirth = ?, sex = ?, nationality = ?, CMND = ?,  shelter = ?, dateStart = ?, dateEnd = ?, reason = ? WHERE idabsent = ?";
        var values = [ ward, name, dateOfBirth, sex, nationality, CMND, shelter, dateStart, dateEnd, reason, idabsent ]
    } else {
        var sql = "INSERT absent SET ward = ?, name = ?, dateOfBirth = ?, sex = ?, nationality = ?, CMND = ?, passport = ?, shelter = ?, dateStart = ?, dateEnd = ?, reason = ? WHERE idabsent = ?";
        var values = [ ward, name, dateOfBirth, sex, nationality, CMND, passport, shelter, dateStart, dateEnd, reason, idabsent ]
    }
    if (name == null || dateOfBirth == null || sex == null || nationality == null || CMND == null || shelter == null || dateStart == null || dateEnd == null || reason == null || ward == null)
        res.send({ success: 0, message: 'thieu thong tin' })
    else {        
        mysql.query(sql, values), (err, absentCreated) => {
            if (err) {
                console.log('eee');
                res.status(404).send({ success: 0, message: 'thieu thong tin' })
            } else {
                res.status(200).send({ success: 1, message: 'thành công' })
                console.log('ddd')
            }
        };
    }
});

module.exports = absentRouter;