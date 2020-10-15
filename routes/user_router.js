const express = require('express');
const body_parser = require('body-parser');
const urlencoded_parser = body_parser.urlencoded({extended:false});

const user_controller = require('../controllers/user_controller');
const user_router = express.Router();

user_router.post("/login", urlencoded_parser, user_controller.post_login);
user_router.get("/login/:id", urlencoded_parser, user_controller.get_login_std);
user_router.post("/registration", urlencoded_parser, user_controller.post_registration);
user_router.post("/password-loss", urlencoded_parser, user_controller.post_password_loss);

module.exports = user_router;

