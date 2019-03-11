const mysql = require('mysql');
const Schema = mysql.Schema;

// const absentModel = new Schema({
//     // dearWard: { type: String, required: true },
//     status: { type: Number, require: true, default: 0 },
//     // owner: { type: Schema.Types.ObjectID, ref: 'User' },
//     name: { type: String, required: true },
//     dateOfBird: { type: Date, required: true },
//     sex: { type: String, required: true },
//     nationality: { type: String, required: true },
//     CMND: { type: Number, required: true, unique: true},
//     passport: { type: Number, required: true, unique: true },
//     // placeAllocated: { type: String, required: true },
//     // dateAllocated: { type: Date, required: true },
//     // resident: { type: String, required: true },
//     shelter: { type: String, required: true },
//     dateStart: { type: Date, required: true },
//     dateEnd: { type: Date, required: true },
//     reason: { type: String, required: true },
//     created_at: { type: Date, default: new Date() }
// });

// module.exports = absentModel;