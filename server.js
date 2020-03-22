require("dotenv").config();
var express = require("express");

var db = require("./models");

var app = express();
var passport = require("passport")
var session = require("express-session");
var bodyParser = require("body-parser");
var flash = require("express-flash");


var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(express.json());
app.use(express.static("public"));
//For Passport
app.use(session({secret: "keyboard cat",resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());


app.set("views", "./views");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/authRoutes")(app);
require("./config/passport/passport")(passport, db.user);
require("./config/passport/passport-login")(passport, db.user);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
