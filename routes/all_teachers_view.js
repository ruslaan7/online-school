const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const all_teachers = require('../controllers/all_teachers_controller');
const all_teachers_router = express.Router();

all_teachers_router.get("/", all_teachers.get_teachers);
all_teachers_router.get("/:id", all_teachers.get_teachers_std);


module.exports = all_teachers_router;