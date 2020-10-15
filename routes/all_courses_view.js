const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const all_courses = require('../controllers/all_courses_controller');
const all_courses_router = express.Router();

all_courses_router.get("/", all_courses.get_courses);
all_courses_router.get("/:id", all_courses.get_courses_std);


module.exports = all_courses_router;