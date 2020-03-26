var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/schedule", function (req, res) { //this is to display the full work schedule currently
        db.schedule.findAll({}).then(function (dbschedule) {
            res.json(dbschedule);
        });
    });

    // Create a request off 
    app.post("/api/requestoff", function (req, res) { //this is to be able to add the request off
        var newRequest = req.body;
        console.log(newRequest);
        db.pto.create({
            firstName: newRequest.firstname,
            lastName: newRequest.lastname,
            date: newRequest.date,
            startTime: newRequest.startTime,
            endTime: newRequest.endTime,
            approved: newRequest.approved
        }).then(function (dbpto) {
            res.json(dbpto);
        });
    });

    app.post("/api/avail", function (req, res) { //this is to be able to add availability for the week
        db.schedule.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime
        }).then(function (dbschedule) {
            res.json(dbschedule);
        });
    });

//   // Delete a request off by id -- not implemented
  app.delete("/api/requestoff/:id", function(req, res) {
    db.Schedule.destroy({ where: { id: req.params.id } }).then(function(dbSchedule) {
      res.json(dbSchedule);
    })})}

