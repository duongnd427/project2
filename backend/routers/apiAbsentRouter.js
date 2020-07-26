const express = require('express');
const absentRouter = express.Router();

const mysql = require('../mysql');


absentRouter.post('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    const { wardp, name, dateOfBirth, sex, nationality, CMND, passport, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason } = req.body;
    if (passport == '') {
        var sql = "INSERT INTO absent ( wardp, name, dateOfBirth, sex, nationality, CMND,  province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, owner ) VALUES ?";
        var values = [wardp, name, dateOfBirth, sex, nationality, CMND, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, owner]
    } else {
        var sql = "INSERT INTO absent ( wardp, name, dateOfBirth, sex, nationality, CMND, passport, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, owner ) VALUES ?";
        var values = [wardp, name, dateOfBirth, sex, nationality, CMND, passport, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, owner]
    }
    if (name == null || dateOfBirth == null || sex == null || nationality == null || CMND == null || province == null || district == null || ward == null || provinceIn == null || districtIn == null || wardIn == null || dateStart == null || dateEnd == null || reason == null || owner == null || ward == null)
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
    if (owner == '111') {
        mysql.query("SELECT * FROM absent", (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        })
    } else {
        var sql = "SELECT * FROM absent WHERE owner = ?"
        var value = [owner]
        mysql.query(sql, [value], (err, result) => {
            if (err) console.error(err);
            else res.send(result)
        });
    }
});

absentRouter.put('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    if (owner == '111') {
        const { status, idabsent } = req.body;
        var sql = "UPDATE absent SET status = ? WHERE idabsent = ?"
        var values = [status, idabsent]
        mysql.query(sql, values), (err, result) => {
            if (err) console.log(err)
            else res.send({ success: 1, message: 'thay doi thanh cong' })
        }
    } else {
        const { idabsent, wardp, name, dateOfBirth, sex, nationality, CMND, passport, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason } = req.body;
        if (passport == '') {
            var sql = "UPDATE absent SET wardp = ?, name = ?, dateOfBirth = ?, sex = ?, nationality = ?, CMND = ?, province = ?, district = ?, ward = ?, provinceIn = ?, districtIn = ?, wardIn = ?, dateStart = ?, dateEnd = ?, reason = ? WHERE idabsent = ?";
            var values = [wardp, name, dateOfBirth, sex, nationality, CMND, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, idabsent]
        } else {
            var sql = "UPDATE absent SET wardp = ?, name = ?, dateOfBirth = ?, sex = ?, nationality = ?, CMND = ?, passport = ?, province = ?, district = ?, ward = ?, provinceIn = ?, districtIn = ?, wardIn = ?, dateStart = ?, dateEnd = ?, reason = ? WHERE idabsent = ?";
            var values = [wardp, name, dateOfBirth, sex, nationality, CMND, passport, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, idabsent]
        }
        if (name == null || dateOfBirth == null || sex == null || nationality == null || CMND == null || province == null || district == null || ward == null || provinceIn == null || districtIn == null || wardIn == null || dateStart == null || dateEnd == null || reason == null || ward == null)
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
    }
});

module.exports = absentRouter;