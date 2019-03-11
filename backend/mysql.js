const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anhxinloi',
    database: 'mydb'
});

// module.exports = {con};

//     console.log('DB connected: ' + con.threadId);
//     // con.query("CREATE DATABASE mydb", (err, result) => {
//     //     if(err) console.error(err)
//     //     console.log('DB created');
//     // });
//     // var sql = "CREATE TABLE indwell (dearWard VARCHAR(255), name VARCHAR(255), dateOfBird VARCHAR(255), CMND VARCHAR(255), placeAllocated VARCHAR(255), dateAllocated VARCHAR(255), resident VARCHAR(255), shelter VARCHAR(255), dateStart VARCHAR(255), dateEnd VARCHAR(255), reason VARCHAR(255), created_at VARCHAR(255), status VARCHAR(255), owner VARCHAR(255))";
//     // var sql2 = "CREATE TABLE absent (name VARCHAR(255), dateOfBird DATE, sex VARCHAR(10), nationality VARCHAR(255), CMND INT, passport INT, shelter VARCHAR(255), dateStart DATE, dateEnd DATE, reason VARCHAR(255), created_at DATE, status VARCHAR(10), owner INT)";
//     // var sql3 = "INSERT INTO mydb.absent ( name, dateOfBird, sex, nationality, CMND, passport, shelter, dateStart, dateEnd, reason, created_at, status, owner ) VALUES ( 'NguyenThanhDuong', '1997-04-02', 'Nam', 'Vietnam', 163363950, 123, 'Mai Dong', '2019-04-02', '2020-04-02', 'hoc tap', '2019-03-06', 'wait', 0978492740 )";
//     // var sql4 = "INSERT INTO mydb.indwell (dearWard, name, dateOfBird, CMND, placeAllocated , dateAllocated, resident, shelter, dateStart, dateEnd, reason, created_at, status, owner) VALUES ('CA phuong Mai Dong', 'Nguyen Thanh Duong',  '1997-02-02', 163363950, 'Nam Dinh', '2013-01-15', 'Xuan Truong, Nam Dinh', 'Mai Dong', '2019-03-06', '2020-03-06', 'hoc tap','2019-03-06', 'wait', 0978492740)";
//     // var sql5 = "SELECT * FROM indwell";
//     // con.query(sql5, (err, result) => {
//     //         if(err) console.error(err);
//     //         console.log(result);
//     //     });