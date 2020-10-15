const course = require("../models/courses");
const teacher = require("../models/teachers");
const student = require("../models/students");

exports.admin_get = function(request, response)
{
    response.sendFile(__dirname+"/admin.html")
};

const admin_login = "admin";
const admin_pass = "admin";

exports.admin_post = function(request,response) {
    if(!request.body) response.sendStatus(400);

    const log=request.body.admin_login;
    const psw=request.body.admin_pass;
    if(log === admin_login && psw === admin_pass){
        response.redirect("/courses");
    }
    else{
        response.send(`Такого админа нет`);
    }
};

exports.get_courses = function (request, response) {
    course.find({}, function (err, allCourses) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/courses_admin.hbs", {
           courses: allCourses
        });
    });
};

exports.post_course = function (request, response) {
    if(!request.body) return response.sendStatus(400);

    const courseName = request.body.cr_course_name;
    const courseDesc = request.body.cr_course_description;
    const courseTeach = request.body.cr_course_teacher;
    const courseStart = request.body.cr_course_start_date;
    const courseStop = request.body.cr_course_end_date;
    const coursePrice = request.body.cr_course_price;


    const coursenew = new course({name: courseName, description: courseDesc,
        teacher: courseTeach, start: courseStart, stop: courseStop, price: coursePrice});

    coursenew.save(function (err) {
        if(err) return console.log(err);
        response.redirect("/courses")
    })

    teacher.update({name: courseTeach}, { $push: {courses: courseName}}, {sort: ''},function (err, res) {
        if (err) return console.log("Error");
    });
};

exports.edit_course = function (request, response) {
    if(!request.body) response.sendStatus(400);

    const courseName = request.body.edit_course_name;
    const courseDesc = request.body.edit_course_description;
    const courseTeach = request.body.edit_edit_course_teacher;
    const courseStart = request.body.edit_course_start_date;
    const courseStop = request.body.edit_course_end_date;
    const coursePrice = request.body.edit_course_price;

    course.updateOne({name: courseName}, {description: courseDesc, teacher: courseTeach,
        start: courseStart, stop: courseStop, price: coursePrice}, function (err) {
        if (err) return console.log("Error");
        response.redirect("/courses");
    })

};

exports.delete_course = function (request, response) {
    const courseName = request.body.del_course_name;
    console.log("del")
    course.deleteOne({name: courseName}, function (err) {
        if (err) return console.log("Error")
        response.redirect("/courses");
    });
    console.log("del")
};



exports.get_teachers = function (request, response) {
    console.log("Teachers");
    teacher.find({}, function (err, allTeachers) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/teachers_admin.hbs", {
            teacher: allTeachers
        });
    });
};

exports.post_teacher = function (request, response) {
    if(!request.body) return response.sendStatus(400);

    const teacherName = request.body.cr_teacher_name;
    const teacherBirth = request.body.cr_teacher_dateofbirth;
    const teacherWork = request.body.cr_teacher_workingplace;
    const teacherCourses = request.body.cr_teacher_courses.toString().split(",");

    const teacherNew = new teacher({name: teacherName, birth: teacherBirth,
            workplace: teacherWork, courses:teacherCourses});

    teacherNew.save(function (err) {
        if(err) return console.log(err);
        response.redirect("/teachers")
    })


    for (var i = 0; i < teacherCourses.length; i++){

        const coursenew = new course({name: teacherCourses[i],
            teacher: teacherName});
        coursenew.save(function (err) {
            if(err) return console.log(err);
        })
    }
};

exports.edit_teacher = function (request, response){
    if(!request.body) response.sendStatus(400);

    const teacherName = request.body.ed_teacher_name;
    const teacherBirth = request.body.ed_teacher_dateofbirth;
    const teacherWork = request.body.ed_teacher_workingplace;
    const teacherCourses = request.body.ed_teacher_courses.toString().split(",");



    for (var i = 0; i < teacherCourses.length; i++){

        const coursenew = new course({name: teacherCourses[i],
            teacher: teacherName});
        coursenew.save(function (err) {
            if(err) return console.log(err);
        })
    }
    teacher.updateOne({name: teacherName}, {birth: teacherBirth, workplace: teacherWork, courses:teacherCourses}, function (err) {
        if (err) return console.log("Error");
        response.redirect("/teachers");
    })

};

exports.delete_teacher = function (request, response) {
    const teacherName = request.body.del_teacher_name;

    teacher.deleteOne({name: teacherName}, function (err) {
        if (err) return console.log("Error");
        response.redirect("/teachers");
    });
};