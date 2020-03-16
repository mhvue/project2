var path = require("path");


module.exports = function(app) {
  // Load index/HOME PAGE  w/ login 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // SCHEDULE PAGE = display the schedule page 
  app.get("/schedule", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/schedulePage.html"));
  
  });

  //REQUEST OFF page 
  app.get("/requestOff", function(req,res){ 
    res.sendFile(path.join(__dirname, "../views/requestOff.html")); //model shows the request was sent instead of seperate page 
  });

   //user LOGS OUT Page = this is the page that shows when user logs out
  app.get("/end", function(req,res) {
    // res.sendFile(path.join(__dirname, "../views/logOut.html")); 
    // OR go back to home page 
    res.redirect("/");

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).send("Unable to find. Try again")
    });
};
