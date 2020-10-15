var express = require('express');

const studController = require('../controllers/studController');

const studRouter = express.Router();

studRouter.get("/courses", studController.getCourses);
studRouter.get("/teachers", studController.getTeachers);

module.exports = studRouter;