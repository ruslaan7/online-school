const express = require('express');

const stud_controller = require('../controllers/student_controller');

const studRouter = express.Router();

studRouter.get("/", stud_controller.get_courses);


module.exports = studRouter;