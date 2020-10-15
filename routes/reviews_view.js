const express = require('express');

const bodyParser = require('body-parser');
const urlencodedParser=bodyParser.urlencoded({extended:false});

const reviews_controller = require('../controllers/reviews_controller');
const reviews_router = express.Router();

reviews_router.get("/", reviews_controller.get_reviews);
// reviews_router.post("/addreview", urlencodedParser, reviews_controller.reviews_post);
reviews_router.get("/:id", reviews_controller.get_reviews_log)
reviews_router.post("/add_review",urlencodedParser, reviews_controller.post_review)

module.exports = reviews_router;