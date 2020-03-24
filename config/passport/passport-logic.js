//BELOW IS FOR SIGNING UP A NEW USER 
var bCrypt = require("bcrypt");
var UserDB = require("../../models");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function(passport, user){
    console.log("yoooo I'm from passport.js")
    

    passport.use("local-signup", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        }, 
        function(req, email, password, done){
            var generateHash = function(password) {
                return bCrypt.hashSync(password, 8 , null);
            };
            console.log("meeeeee");

            UserDB.user.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: "That email is already taken"
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data =
                    {
                        email: req.body.email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    UserDB.user.create(data).then(function(newUser){
                        console.log(newUser);
                        if(!newUser){
                            return done(null, false);
                        }
                        if (newUser){
                            return done(null, newUser);
                        }
                    });
                }
                console.log("created: " + data);
            });
        }
    ));
    
    passport.use("local.signin", new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            console.log("anythingggggg")
            // UserDB.user.findOne({
            //     where: {
            //         email: email
            //     }
            // }).then(function(user){
            //     console.log("hello user:" + user); //USER IS CONSOLE LOGGGING SHOWING UP AS NULL
            //     if(!user) {
            //         return done(null, false, {
            //             message: "Email does not exist."
            //         });
            //     }
            //     console.log("helllo3rd")
            //     console.log(password);
            //     console.log(user.password);
            
    
            // var validPassword =  bCrypt.compareSync(password, user.password);
            // console.log(validPassword);
    
            //     if(!validPassword){
            //         return done(null, false,{
            //             message: "Incorrect Password."
            //         });
            //     }
    
            //     console.log("DOJO: " + user.password, "typed in:" + password);
    
            //     var userInfo= user.get();
            //     console.log(userInfo);
            //     return done(null, userInfo);
    
            // }).catch(function(err){
            //     console.log("error:" + err);
            //     return done(null, false, {
            //         message: "Sorry! Something weng wrong with your sign in."
            //     });
                
            // });
            
        }
    ));
    
    // passport.serializeUser(function(user, done){
    //     done(null, user.id);
    // });

    // passport.deserializeUser(function(id, done){
    //     UserDB.user.findByPk(id).then(function(user){ //had to change this to findByPk  
    //         if (user){
    //             done(null, user.get());
    //         } else {
    //             done(user.errors, null);
    //         }
    //     });
    // });

}
