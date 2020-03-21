//STARTING WRITE CODE HERE: 

//requiring the authController.js

var authController = require("./authController.js");

// this is our GET to the sign up page w/ authControlLer
module.exports = function (app){
    app.get("/signup", authController.signup);

// Full expected result of this page as laid out in documentation below:

// module.exports = function(app, passport) { //we do not have passport yet! 

    // app.get('/signin', authController.signin);
    app.get("/index", authController.signin);
 
    app.post("/signup", passport.authenticate("local", {
        failureRedirect: "/signup"}),function(req,res){
            res.redirect("/dashboard")
        }

        //     successRedirect: '/dashboard',
 
        //     failureRedirect: '/signup'
        // }
 
    );
 
 
//     app.get('/dashboard', isLoggedIn, authController.dashboard);
 
 
 
//     app.get('/logout', authController.logout);
 
 
//     app.post('/signin', passport.authenticate('local-signin', {
//             successRedirect: '/dashboard',
 
//             failureRedirect: '/signin'
//         }
 
//     ));
 
 
//     function isLoggedIn(req, res, next) {
 
//         if (req.isAuthenticated())
 
//             return next();
 
//         res.redirect('/signin');
 
//     }
 
}