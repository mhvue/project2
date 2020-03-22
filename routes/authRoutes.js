//STARTING WRITE CODE HERE: 

//requiring the authController.js
var passport = require("passport");
var authController = require("./authController.js");

// this is our GET to the sign up page w/ authControlLer
module.exports = function (app){
    app.get("/auth/signup", authController.signup);

// Full expected result of this page as laid out in documentation below:

// module.exports = function(app, passport) { //we do not have passport yet! 

    app.get("/auth/signin", authController.signin);
 
    app.post("/auth/signup", passport.authenticate("local", {
        failureRedirect: "/signup"}),function(req,res){
            res.redirect("/loggedin")
            
        }
    );
 
 
    app.get('/', isLoggedIn, authController.index);
 
 
 
    app.get('/auth/logout', authController.logout);
 
 
    app.post('/auth/signin', passport.authenticate('local', {
            successRedirect: "/",
            failureRedirect: "/signin"
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}