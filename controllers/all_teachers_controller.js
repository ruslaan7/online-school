const teacher = require("../models/teachers");

exports.get_teachers = function (request, response) {
    teacher.find({}, function (err, allTeachers) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/all_teachers.hbs", {
            teacher: allTeachers
        });
    });
};

exports.get_teachers_std = function (request, response) {

    const name = request.params.id;

    teacher.find({}, function (err, allTeachers) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/all_teachers_for_std.hbs", {
            teacher: allTeachers,
            students: name
        });
    });
};
