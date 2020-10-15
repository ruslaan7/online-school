const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const course = require('../controllers/chosen_course_controller');
const chosen_course_router = express.Router();

chosen_course_router.get("/:id", urlencoded_parser, course.choose_course);
chosen_course_router.get("/choose_teacher/:id",urlencoded_parser ,course.choose_teacher);
chosen_course_router.post("/signup_course",urlencoded_parser, course.signup_course)


module.exports = chosen_course_router;