const course = require("../models/courses");

exports.get_courses = function (request, response) {
    course.find({}, function (err, allCourses) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/all_courses.hbs", {
            course: allCourses
        });
    });
};

exports.get_courses_std = function (request, response) {

    const name = request.params.id;

    course.find({}, function (err, allCourses) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/all_courses_for_std.hbs", {
            course: allCourses,
            students: name
        });
    });
};

