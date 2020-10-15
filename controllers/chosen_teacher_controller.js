const teacher = require("../models/teachers");

exports.choose_teacher = function (request, response) {

    const tname = request.params.id;

    teacher.find({name: tname}, function (err, allCourses) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/teacher.hbs", {
            teacher: allCourses
        });
    });
};