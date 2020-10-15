const mongoose = require('mongoose');

const schema = mongoose.Schema;

const reviews = new schema({
    name: String,
    review: String,
    courses: String,
    date: String,
    rating: Number
}, { versionKey: false });
module.exports = mongoose.model('reviews', reviews);