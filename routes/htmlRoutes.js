// var db = require("../models");
var path = require("path");


module.exports = function(app) {
  // Load index/HOME PAGE  w/ login 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
    // db.nameOfModelHere.findAll({}).then(function(dbExamples) { //display the home page w/ login 
    //   res.render("index", { //will most lik
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // SCHEDULE PAGE = display the schedule page 
  app.get("/schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/schedulePage.html"));
    // db.nameofModelHere.findOne({ //this findOne is to look for a specific date of working
    //    where: { 
    //      id: req.params.id 
    //     }
    //    }).then(function(dbExample) { 
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  //REQUEST OFF page 
  app.get("/requestOff", function(req,res){ 
    res.sendFile(path.join(__dirname, "../views/requestOff.html")); //model shows the request was sent instead of seperate page 
  });

   //user LOGS OUT Page = this is the page that shows when user logs out
  app.get("/end", function(req,res) {
    res.sendFile(path.join(__dirname, "../views/logOut.html")); 
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
