exports.get_faq = function (request, response) {
    response.render("../views/FAQ.hbs");
};

exports.get_faq_std = function (request, response) {

    const name = request.params.id;

    response.render("../views/FAQ_for_std.hbs", {
        students: name
    });
};