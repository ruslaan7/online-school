const express = require('express')

const bodyParser=require('body-parser')
const urlencodedParser=bodyParser.urlencoded({extended:false})

const adminController = require('../controllers/adminController')
const adminRouter = express.Router();

adminRouter.get("/teachers", adminController.getTeachers);
adminRouter.post("/createTeacher", adminController.postTeacher);
adminRouter.post("/editTeacher", adminController.editTeacher);
adminRouter.post("/deleteTeacher/:name", adminController.deleteTeacher);


adminRouter.get("/", adminController.getCourses);
adminRouter.post("/postCourse", urlencodedParser, adminController.postCourse);
adminRouter.post("/editCourse", urlencodedParser, adminController.editCourse);
adminRouter.post("/deleteCourse/:name", urlencodedParser, adminController.deleteCourse);

module.exports = adminRouter;