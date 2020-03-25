var path = require("path");

module.exports = function(app) {
  // 1st page to Load index login 
  app.get("/", function(req, res) { 
    //will have Login as the default 
    res.redirect("/signin");
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
   });

   app.get("/signin", function(req, res) { //was index here
    res.sendFile(path.join(__dirname, "../public/index.html"));

   });

  //LOGIN  PAGE W/ HOME OR INDEX 
  app.get("/loggedin", function(req, res) { //was index here
   res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
  
  });

  // SCHEDULE PAGE = display the schedule page of current schedule 
  app.get("/schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/schedulePage.html"));
  });


  //availability
  app.get("/avail", function(req,res){ 
    res.sendFile(path.join(__dirname, "../public/avail.html")); 
  });


  //REQUEST OFF page  and //model shows the request was sent instead of seperate page 
  app.get("/requestoff", function(req,res){ 
    res.sendFile(path.join(__dirname, "../public/requestOff.html")); 
  });

   //user LOGS OUT Page = this is the page that shows when user logs out
  app.get("/logout", function(req,res) {
    // res.sendFile(path.join(__dirname, "../public/logOut.html")); 
    // OR go back to home page 
    res.redirect("/signin");

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).send("Unable to find. Try again")
    });
};
