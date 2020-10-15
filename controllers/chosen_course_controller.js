const course = require("../models/courses");
const teacher = require("../models/teachers");
const student = require("../models/students")

exports.choose_course = function (request, response) {

    const cname = request.params.id;

    course.find({name: cname}, function (err, allCourses) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/course.hbs", {
            course: allCourses
        });
    });
};

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

exports.signup_course = function (request, response) {

    if(!request.body) return response.sendStatus(400);

    const studName = request.body.uname;
    const studPsw = request.body.psw;
    const studCourse = request.body.course_name;

    student.find({login: studName, psw: studPsw}, null, {sort: ''},function (err, res) {

        if(res.length === 0){
            response.send(`Такого клиента нет`);
        }
        else{
            student.update({login: studName, psw: studPsw},
                { $push: {courses: { course_id: 'New_course', name: studCourse, progr: 0 }}},
                {sort: ''},
                function (err, res) {
                    if (err) return console.log("Error");
                });
            response.redirect("/all_courses");
        }
    });

};