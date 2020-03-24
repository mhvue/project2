// //NOT USING THIS FILE...SAVED IT JUST IN CASE... 


// var bCrypt = require("bcrypt");
// var UserDB = require("../../models");

// module.exports = function(passport, user){
//     console.log("helloo1st from passport-login.us")
//     var LocalStrategy = require("passport-local").Strategy;
//     console.log("hello2nd")

// passport.use("local", new LocalStrategy(
//     {
//         usernameField: "email",
//         passwordField: "password",
//     },
    
//     function(email, password, done) {

//         UserDB.user.findOne({
//             where: {
//                 email: email
//             }
//         }).then(function(user){
//             console.log("hello user:" + user); //USER IS CONSOLE LOGGGING SHOWING UP AS NULL
//             if(!user) {
//                 return done(null, false, {
//                     message: "Email does not exist."
//                 });
//             }
//             console.log("helllo3rd")
//             console.log(password);
//             console.log(user.password);
        

//         var validPassword =  bCrypt.compareSync(password, user.password);
//         console.log(validPassword);

//             if(!validPassword){
//                 return done(null, false,{
//                     message: "Incorrect Password."
//                 });
//             }

//             console.log("DOJO: " + user.password, "typed in:" + password);

//             var userInfo= user.get();
//             console.log(userInfo);
//             return done(null, userInfo);

//         }).catch(function(err){
//             console.log("error:" + err);
//             return done(null, false, {
//                 message: "Sorry! Something weng wrong with your sign in."
//             });
            
//         });
        
//     }
// ));

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
// });


// })};

