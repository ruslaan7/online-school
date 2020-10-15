const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const course = require('../controllers/chosen_teacher_controller');
const chosen_teacher_router = express.Router();

chosen_teacher_router.get("/:id", course.choose_teacher);

module.exports = chosen_teacher_router;