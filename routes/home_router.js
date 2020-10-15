const express = require('express');

const home_controller = require('../controllers/home_controller');
const home_router = express.Router();

home_router.get("/", home_controller.get_home);

module.exports = home_router;