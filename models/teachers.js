const mongoose = require('mongoose');

const schema = mongoose.Schema;

const teachers = new schema({
    name: String,
    birth: String,
    workplace: String,
    regards: String,
    time: String,
    courses: [String]
}, { versionKey: false });
module.exports = mongoose.model('teachers', teachers);