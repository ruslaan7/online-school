const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const admin_controller = require('../controllers/admin_controller');
const admin_teachers_router = express.Router();

admin_teachers_router.get("/", admin_controller.get_teachers);
admin_teachers_router.post("/createTeacher", urlencoded_parser, admin_controller.post_teacher);
admin_teachers_router.post("/editTeacher", urlencoded_parser, admin_controller.edit_teacher);
admin_teachers_router.post("/deleteTeacher", urlencoded_parser, admin_controller.delete_teacher);

module.exports = admin_teachers_router;