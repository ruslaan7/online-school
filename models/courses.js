const mongoose = require('mongoose');

const schema = mongoose.Schema;

const courses = new schema({
    name: String,
    description: String,
    teacher: String,
    start: String,
    stop: String,
    price: Number,
    how_many: Number
}, { versionKey: false });
module.exports = mongoose.model('courses', courses);