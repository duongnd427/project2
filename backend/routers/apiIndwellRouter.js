const express = require('express');
const indwellRouter = express.Router();

const mysql = require('../mysql');

indwellRouter.post('/', (req, res) => {
    const owner = req.session.user[0].cmnd;
    const { ward, name, dateOfBirth, CMND, dateAllocated, placeAllocated, resident, shelter, dateStart, dateEnd, reason } = req.body;
    if (ward == null || name == null || dateOfBirth == null || CMND == null || dateAllocated == null || placeAllocated == null || resident == null || shelter == null || dateStart == null || dateEnd == null || reason == null || owner == null)
        res.send({ success: 0, message: 'thieu thong tin' })
    else {
        var sql = "INSERT INTO `indwell` ( `ward`, `name`, `dateOfBirth`, `CMND`, `dateAllocated`, `placeAllocated`, `resident`, `shelter`, `dateStart`, `dateEnd`, `reason`, `owner` ) VALUES ?";
        var values = [ward, name, dateOfBirth, CMND, dateAllocated, placeAllocated, resident, shelter, dateStart, dateEnd, reason, owner]
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
    var sql = "SELECT * FROM indwell wHERE owner = ?"
    var value = [owner]
    mysql.query(sql, [value], (err, result) => {
        if (err) console.error(err);
        res.send(result)
    });
});

indwellRouter.put('/', (req, res) => {
    // console.log(req.body)
    const { idindwell, ward, name, dateOfBirth, CMND, dateAllocated, placeAllocated, resident, shelter, dateStart, dateEnd, reason } = req.body;
    if (ward == null || name == null || dateOfBirth == null || CMND == null || dateAllocated == null || placeAllocated == null || resident == null || shelter == null || dateStart == null || dateEnd == null || reason == null ) {
        res.send({ success: 0, message: 'thieu thong tin' })
    }
    else {
        var sql = "UPDATE indwell SET ward = ?, name = ?, dateOfBirth = ?, CMND = ?, dateAllocated = ?, placeAllocated= ?, resident= ?, shelter= ?, dateStart= ?, dateEnd= ?, reason = ? WHERE idindwell = ? ";
        var values = [ward, name, dateOfBirth, CMND, dateAllocated, placeAllocated, resident, shelter, dateStart, dateEnd, reason, idindwell ]
        mysql.query(sql, values), (err, indwellCreated) => {
            if (err) {
                console.log(err);
                res.send({ success: 0, message: 'thieu thong tin' })
            } else {
                res.send({ success: 1, message: 'thành công' })
            }
        };
    };
});

module.exports = indwellRouter;