const student = require("../models/students");

exports.post_login = function(request, response){
    if(!request.body) response.sendStatus(400);
    const log=request.body.uname;
    const psw=request.body.psw;

    student.find({login: log, psw: psw}, null, {sort: ''},function (err, res) {

        console.log(res)
        if(res.length === 0){
            response.send(`Такого клиента нет`);
        }
        else{
            response.render("../views/students_courses.hbs", {
                students: res
            });
        }
    });
};


exports.get_login_std = function(request, response){

    const uname=request.params.id;

    student.find({name: uname}, null, {sort: ''},function (err, res) {

        console.log(res)
        if(res.length === 0){
            response.send(`Такого клиента нет`);
        }
        else{
            response.render("../views/students_courses.hbs", {
                students: res
            });
        }
    });
};

exports.post_registration = function(request,response)
{
    if(!request.body) response.sendStatus(400);
    const name=request.body.name;
    const number=request.body.tel_number;
    const email=request.body.login;
    const psw=request.body.psw;

    const user = new student({name: name, tel_number:number, login:email, psw:psw})
    user.save(function (err) {
        if (err) return console.log("Error");
    });
    response.redirect("/students");
};

exports.post_password_loss = function(request,response)
{
    if(!request.body) response.sendStatus(400);
    const log=request.body.uname;
    const psw=request.body.psw;

    student.updateOne({login:log}, {psw:psw}, function (err) {
        if (err) return console.log("Error");
    });
    response.redirect("/");
};