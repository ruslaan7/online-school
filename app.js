const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false});
const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/online-school');

const home_router = require("./routes/home_router");
const admin_course_router= require("./routes/admin_course_router");
const admin_teachers_router= require("./routes/admin_teachers_router");
const students_router = require("./routes/students_router");
const user_router = require("./routes/user_router");
const admin_router = require("./routes/admin_router");
const courses_view_router = require("./routes/all_courses_view");
const teacher_view_router = require("./routes/all_teachers_view");
const chosen_course_view_router = require("./routes/course_view");
const chosen_teacher_view_router = require("./routes/teacher_view");
const reviews_router = require("./routes/reviews_view");
const faq_router = require("./routes/faq_view");

app.use(express.static(__dirname +'/public'));

app.set("view engine", "hbs");

app.use("/courses", admin_course_router);
app.use("/teachers", admin_teachers_router);
app.use("/students", students_router);
// app.use("/", home_router);
app.use("/", user_router);
app.use("/admin", admin_router);
app.use("/all_courses", courses_view_router);
app.use("/all_teachers", teacher_view_router);
app.use("/chosen_course", chosen_course_view_router);
app.use("/chosen_teacher", chosen_teacher_view_router);
app.use("/reviews", reviews_router);
app.use("/faq", faq_router);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {}); //коннектимся к базе


app.listen(3000, (err)=>{
  if(err)
    return console.log('error', err)
});