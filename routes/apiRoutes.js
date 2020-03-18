// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) { //this is to display the full work schedule
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a reqeust off 
//   app.post("/api/requestOff", function(req, res) { //this is to be able to add/create the request off
//     db.Example.create({
//       colmn1: req.body.colmn1,
//       colmn2: req.body.colmn2
//     }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

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