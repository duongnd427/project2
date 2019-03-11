const express = require('express');
const indwellRouter = express.Router();

const mysql = require('../mysql');

indwellRouter.get('/indwell', (req, res) => {
    mysql.con.query("SELECT * FROM indwell", (err, result) => {
        if (err) console.error(err);
        console.log(result)
        res.send(result)
    });
});

// indwellRouter.post('/indwell', (req, res) => {
//     const { dearWard, name, dateOfBird, CMND, placeAllocated , dateAllocated, resident, shelter, dateStart, dateEnd, reason, created_at, status, owner } = req.body;
//     var sql = "INSERT INTO indwell ( dearWard, name, dateOfBird, CMND, placeAllocated , dateAllocated, resident, shelter, dateStart, dateEnd, reason, created_at, status, owner ) VALUES ?";
//     var values = [ dearWard, name, dateOfBird, CMND, placeAllocated , dateAllocated, resident, shelter, dateStart, dateEnd, reason, created_at, status, owner ]
//     mysql.con.query(sql, [values]), (err, indwellCreated) => {
//         if(err) res.status(500).send({success: 0, err })
//         else res.send({ success: 1, indwellCreated })
//     };
// });

module.exports = indwellRouter;