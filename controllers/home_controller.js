exports.get_home = function(request, response){
    response.sendFile(__dirname+"/public/index.html");
};