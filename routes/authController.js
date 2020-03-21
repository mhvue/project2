
// Talked with Kathy - we want to set this up like an object with each function a method inside - this is what sarah was trying to get at with the objects on Wed =

module.exports = {

    signup: function(req, res) {
        res.render("signup");
        console.log("hello")
    },

//     signin: function(req, res) {
//         res.render("signin");
//         console.log("hellooo")
//     },

//     dashboard: function(req, res) {
//         res.render("dashboard");
//         console.log("hello")
//     },

        // logout: function(req, res) {
 
        //     req.session.destroy(function(err) {
         
        //         res.redirect('/');
         
        //     });
         
        // }
};