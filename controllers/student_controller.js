const students = require("../models/students");
const reviews = require("../models/reviews");
const course = require("../models/courses");

exports.get_courses = function (request, response) {
    students.find({}, function (err, all_students) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/students_courses.hbs", {
            students: all_students
        });
    });
};


