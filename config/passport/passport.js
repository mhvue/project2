//BELOW IS FOR SIGNING UP A NEW USER 

var bCrypt = require("bcrypt");
var UserDB = require("../../models");

module.exports = function(passport, user){
    var LocalStrategy = require("passport-local").Strategy;


    passport.use(new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },

    function(req, email, password, done){
        var generateHash = function(password) {
            return bCrypt.hashSync(password, 8 , null);
        };

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

                UserDB.user.create(data).then(function(newUser, created){
                    if(!newUser){
                        return done(null, false);
                    }
                    if (newUser){
                        return done(null, newUser);
                    }
                });
            }
            console.log(user);
        });
    }

    ));

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done){
        UserDB.user.findByPk(id).then(function(user){ //had to change this to findByPk  
            if (user){
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
    });

})};

