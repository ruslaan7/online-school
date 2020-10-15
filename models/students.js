const mongoose = require('mongoose');

const schema = mongoose.Schema;

const students = new schema({
    name: String,
    login:String,
    psw:String,
    tel_number:String,
    courses: [
        {
            course_id: String,
            name: String,
            subject: {
                sub_id: Number,
                s_name: String
            },
            progr: Number
        }
    ]
}, { versionKey: false });
module.exports = mongoose.model('students', students);