const express = require('express');

const bodyParser = require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});

const faq_controller = require('../controllers/faq_controller');
const faq_router = express.Router();

faq_router.get("/", faq_controller.get_faq);
faq_router.get("/:id", faq_controller.get_faq_std);

module.exports = faq_router;