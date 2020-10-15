const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const admin_controller = require('../controllers/admin_controller');
const admin_router= express.Router();

admin_router.get("/", urlencoded_parser, admin_controller.admin_get);
admin_router.post("/admin_login", urlencoded_parser, admin_controller.admin_post);

module.exports = admin_router;

