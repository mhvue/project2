var path = require("path");

module.exports = function(app) {
  // 1st page to Load index login 
  app.get("/", function(req, res) { 
    //will have Login as the default 
    // res.redirect("/signin");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
   });

   app.get("/signin", function(req, res) { //was index here
    res.sendFile(path.join(__dirname, "../public/login.html"));

   });

  //onced LOGGED IN, see schedule page AGE W/ HOME OR INDEX 
  app.get("/loggedin", function(req, res) { //was index here
   res.sendFile(path.join(__dirname, "../public/schedulePage.html"));
  
  });

  // SCHEDULE PAGE = display the schedule page of current schedule 
  app.get("/schedule", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/schedulePage.html"));
  });


  //availability
  app.get("/avail", isLoggedIn, function(req,res){ 
    res.sendFile(path.join(__dirname, "../public/avail.html")); 
  });


  //REQUEST OFF page  and //model shows the request was sent instead of seperate page 
  app.get("/requestoff", isLoggedIn, function(req,res){ 
    res.sendFile(path.join(__dirname, "../public/requestOff.html")); 
  });

   //user LOGS OUT Page = this is the page that shows when user logs out
  app.get("/logout", function(req,res) {

    res.redirect("/");

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).send("Unable to find. Try again")
    });

    function isLoggedIn(req, res, next) {
 
      if (req.isAuthenticated())
          return next();
      res.redirect("/signin");

  }
};
