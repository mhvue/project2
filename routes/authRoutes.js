var passport = require("passport");
var authController = require("./authController.js");

module.exports = function (app){
    app.get("/auth/signup", authController.signup);

    app.get("/auth/signin", authController.signin);
 
    app.post("/auth/signup", passport.authenticate("local", {
        failureRedirect: "/signup"}),function(req,res){
            res.redirect("/loggedin")
            
        }
    );
 
    app.get("/auth/loggedin", isLoggedIn, authController.index);
 
    app.get("/auth/logout", authController.logout);
 
    app.post("/auth/signin", passport.authenticate("local", {
        failureRedirect: "*"}), function(req, res){
            res.redirect("/loggedin")
        },
    );
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect("/signin");
 
    }
 
}