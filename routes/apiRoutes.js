var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/schedule", function (req, res) { //this is to display the full work schedule
        db.Schedule.findAll({}).then(function (dbSchedule) {
            res.json(dbSchedule);
        });
    });

    // Create a request off 
    app.post("/api/pto", function (req, res) { //this is to be able to add/create the request off
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

    app.post("/api/schedule", function (req, res) { //this is to be able to add/create the request off
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
//   app.delete("/api/requestOff/:id", function(req, res) { //this is to delete a specific pto request by id 
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

// //adding an update option so that user can update the pto request
//   app.put("/api/updatePTO", function(req, res) {
//     db.Example.update(req.body,
//       {
//         where: {
//           id: 1
//         }
//       }).then(function(req, res){
//         res.json(dbExample);
//       });
//   });