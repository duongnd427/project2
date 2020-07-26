const express = require('express');
const indwellRouter = express.Router();

const mysql = require('../mysql');

indwellRouter.post('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    const { wardp, name, dateOfBirth, CMND, dateAllocated, placeAllocated, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason } = req.body;
    if (wardp == null || name == null || dateOfBirth == null || CMND == null || dateAllocated == null || placeAllocated == null || province == null || district == null || ward == null || provinceIn == null || districtIn == null || wardIn == null || dateStart == null || dateEnd == null || reason == null || owner == null)
        res.send({ success: 0, message: 'thieu thong tin' })
    else {
        var sql = "INSERT INTO `indwell` ( `wardp`, `name`, `dateOfBirth`, `CMND`, `dateAllocated`, `placeAllocated`, `province`, `district`, `ward`, `provinceIn`, `districtIn`, `wardIn`, `dateStart`, `dateEnd`, `reason`, `owner` ) VALUES ?";
        var values = [wardp, name, dateOfBirth, CMND, dateAllocated, placeAllocated, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, owner]
        console.log(values)
        mysql.query(sql, [[values]]), (err, indwellCreated) => {
            if (err) {
                console.log(err);
                res.send({ success: 0, message: 'thieu thong tin' })
            } else {
                res.send({ success: 1, message: 'thành công' })
            }
        };
    }
});

indwellRouter.get('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    if (owner == '111') {
        mysql.query("SELECT * FROM indwell", (err, result) => {
            if (err) console.log(er)
            else res.send(result)
        })
    } else {
        var sql = "SELECT * FROM indwell WHERE owner = ?"
        var value = [owner]
        mysql.query(sql, [value], (err, result) => {
            if (err) console.error(err);
            res.send(result)
        });
    }
});

indwellRouter.put('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    if (owner == '111') {
        const {status, idindwell} = req.body;
        console.log(req.body)
        var sql = "UPDATE indwell SET status = ? WHERE idindwell = ?"
        var values = [status, idindwell]
        mysql.query(sql, values), (err, result) => {
            if(err) console.log(err)
            else res.send({success: 1, message: 'thay doi thanh cong'})
        }
    } else {
        const { idindwell, wardp, name, dateOfBirth, CMND, dateAllocated, placeAllocated, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason } = req.body;
        if (wardp == null || name == null || dateOfBirth == null || CMND == null || dateAllocated == null || placeAllocated == null || province == null || district == null || ward == null || provinceIn == null || districtIn == null || wardIn == null || dateStart == null || dateEnd == null || reason == null) {
            res.send({ success: 0, message: 'thieu thong tin' })
        }
        else {
            var sql = "UPDATE indwell SET wardp = ?, name = ?, dateOfBirth = ?, CMND = ?, dateAllocated = ?, placeAllocated = ?, province = ?, district= ?, ward = ?, provinceIn = ?, districtIn = ?, wardIn = ?, dateStart= ?, dateEnd= ?, reason = ? WHERE idindwell = ? ";
            var values = [wardp, name, dateOfBirth, CMND, dateAllocated, placeAllocated, province, district, ward, provinceIn, districtIn, wardIn, dateStart, dateEnd, reason, idindwell]
            mysql.query(sql, values), (err, indwellCreated) => {
                if (err) {
                    console.log(err);
                    res.send({ success: 0, message: 'thieu thong tin' })
                } else {
                    res.send({ success: 1, message: 'thành công' })
                }
            };
        };
    }
});

module.exports = indwellRouter;