// // //NOT USING THIS FILE...SAVED IT JUST IN CASE... 


// var bCrypt = require("bcrypt");
// var UserDB = require("../../models");

// module.exports = function(passport, user){
//     console.log("helloo1st from passport-login.us")
//     var LocalStrategy = require("passport-local").Strategy;
//     console.log("hello2nd")

// // / SIGN-IN for existing users
// passport.use("local.signin", new LocalStrategy(function(email, password, done) {
//     console.log("anythingggggg")

//     UserDB.findOne({
//         where: {
//             email: email 
//         }
//     }).then(function(user, err){
//         console.log("hello user:" + user); 
//         console.log("hello user:" + err); 
//         if(!user) {
//             return done(null, false, {
//                 message: "Email does not exist."
//             });
//         }
//         console.log("helllo3rd")
//         console.log(password);
//         console.log(user.password);
    

//     var validPassword =  bCrypt.compareSync(password, user.password);
//     console.log(validPassword);

//         if(!validPassword){
//             return done(null, false,{
//                 message: "Incorrect Password."
//             });
//         }

//         console.log("DOJO: " + user.password, "typed in:" + password);

//         var userInfo= user.get();
//         console.log(userInfo);
//         return done(null, userInfo);

//     }).catch(function(err){
//         console.log("error:" + err);
//         return done(null, false, {
//             message: "Sorry! Something weng wrong with your sign in."
//         });
        
//     });
    
// }
// ));



// passport.serializeUser(function(user, done){
// done(null, user.id);
// });

// passport.deserializeUser(function(id, done){
// UserDB.user.findByPk(id).then(function(user){ //had to change this to findByPk  
//     if (user){
//         done(null, user.get());
//     } else {
//         done(user.errors, null);
//     }
// });
// });


// };
