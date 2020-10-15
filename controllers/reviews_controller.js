const reviews = require("../models/reviews");
const course = require("../models/courses");

exports.get_reviews = function (request, response) {
    reviews.find({}, function (err, all_reviews) {
        if(err){
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("../views/reviews_nolog.hbs", {
            reviews: all_reviews
        });
        console.log(all_reviews)
    });
};
exports.get_reviews_log = function (request, response) {

    const uname = request.params.id;
    console.log(uname)

    course.find({}, function (err, allCourses) {
        reviews.find({}, function (err, all_reviews) {
            if(err){
                console.log(err);
                return response.sendStatus(400);
            }
            response.render("../views/reviews_logged.hbs", {
                reviews: all_reviews,
                students: uname,
                courses: allCourses
            });
            console.log(all_reviews)
        });
    });
};

exports.post_review = function(request,response)
{
    console.log(request.body.review_person_name)
    if(!request.body) response.sendStatus(400);
    const name=request.body.review_person_name;
    const cname=request.body.review_course_name;
    const text=request.body.review_description;
    const raiting = request.body.review_rating;
    const date = request.body.review_date;

    const review = new reviews({name: name, review: text, courses: cname, date :date, rating: raiting})
    review.save(function (err) {
        if (err) return console.log("Error");
    });

    response.redirect("/reviews/"+name);
};