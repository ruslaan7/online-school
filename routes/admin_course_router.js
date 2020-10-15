const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const admin_controller = require('../controllers/admin_controller');
const admin_course_router = express.Router();

admin_course_router.get("/", admin_controller.get_courses);
admin_course_router.post("/postCourse", urlencoded_parser, admin_controller.post_course);
admin_course_router.post("/editCourse",urlencoded_parser, admin_controller.edit_course);
admin_course_router.post("/deleteCourse", urlencoded_parser, admin_controller.delete_course);

module.exports = admin_course_router;