var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/schedule", function (req, res) { //this is to display the full work schedule currently
        db.Schedule.findAll({}).then(function (dbSchedule) {
            res.json(dbSchedule);
        });
    });

    // Create a request off 
    app.post("/api/requestOff", function (req, res) { //this is to be able to add the request off
        db.PTO.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            approved: req.body.approved
        }).then(function (dbPTO) {
            res.json(dbPTO);
        });
    });

    app.post("/api/avail", function (req, res) { //this is to be able to add availability for the week
        db.Schedule.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        }).then(function (dbSchedule) {
            res.json(dbSchedule);
        });
    });

//   // Delete a request off by id 
  app.delete("/api/requestOff/:id", function(req, res) {
    db.Schedule.destroy({ where: { id: req.params.id } }).then(function(dbSchedule) {
      res.json(dbSchedule);
    })})}
//STARTING WRITE CODE HERE: 

//requiring the authController.js
// var authController = require("./authController.js");

///this is our GET to the sign up page w/ authControlLer
// module.exports = function (app){
//     app.get("/signup", authController.signup);
// }
