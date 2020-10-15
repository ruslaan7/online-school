const course = require("../models/courses")
const teacher = require("../models/teachers")



exports.getCourses = function (request, response) {
    console.log("Courses");
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

exports.postCourse = function (request, response) {
    console.log("Awww");
    //console.log(request.body.toString())
    if(!request.body) return response.sendStatus(400);
    console.log("Попал");

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
}

exports.editCourse = function (request, response) {
    if(!request.body) response.sendStatus(400);

    const courseName = request.body.edit_course_name;
    const courseDesc = request.body.edit_course_description;
    const courseTeach = request.body.edit_edit_course_teacher;
    const courseStart = request.body.edit_course_start_date;
    const courseStop = request.body.edit_course_end_date;
    const coursePrice = request.body.edit_course_price;

    course.updateOne({name: courseName}, {description: courseDesc, teachers: courseTeach,
        start: courseStart, stop: courseStop, price: coursePrice}, function (err) {
        if (err) return console.log("Error")
        response.redirect("/courses");
    })

}

exports.deleteCourse = function (request, response) {
    const courseName = request.body.name;
    console.log("del")
    course.deleteOne({name: courseName}, function (err) {
        if (err) return console.log("Error")
        response.redirect("/courses");
    });
};



exports.getTeachers = function (request, response) {
    console.log("Teachers");
    course.find({}, function (err, allTeachers) {

        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/teachers_admin.hbs", {
            teachers: allTeachers
        });
    });
};

exports.postTeacher = function (request, response) {
    if(!request.body) return response.sendStatus(400);

    const teacherName = request.body.cr_teacher_name;
    const teacherBirth = request.body.cr_teacher_dateofbirth;
    const teacherWork = request.body.cr_teacher_workingplace;
    const teacherCourses = request.body.cr_teacher_courses;

    const teacherNew = new teacher({name: teacherName, birth: teacherBirth,
            workplace: teacherWork, courses:teacherCourses});

    teacherNew.save(function (err) {
        if(err) return console.log(err);
        response.redirect("/teachers")
    })
};

exports.editTeacher = function (request, response){
    if(!request.body) response.sendStatus(400);

    const teacherName = request.body.ed_teacher_name;
    const teacherBirth = request.body.ed_teacher_dateofBirth;
    const teacherWork = request.body.ed_teacher_workingplace;
    const teacherCourses = request.body.ed_teacher_courses;

    teacher.updateOne({name: teacherName}, {birth: teacherBirth, workplace: teacherWork, courses:teacherCourses}, function (err) {
        if (err) return console.log("Error")
        response.redirect("/teachers");
    })

};

exports.deleteTeacher = function (request, response) {
    const teacherName = request.params.name;

    course.deleteOne({name: teacherName}, function (err) {
        if (err) return console.log("Error")
        response.redirect("../views/teachers_admin.hbs");
    });
};