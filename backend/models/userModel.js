const mysql = require('mysql');
const Schema = mysql.Schema;

const userModel = new Schema({
    name: { type: String, require: true, unique: true },
    phone: { type: Number, require: true, unique: true},
    password: { type: Number, require: true}
})

module.exports = userModel;
