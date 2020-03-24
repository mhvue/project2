// Get references to page elements
var schedulePage = $("#schedule-data");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  // saveExample: function(example) {
  //   return $.ajax({
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     type: "POST",
  //     url: "api/examples",
  //     data: JSON.stringify(example)
  //   });
  // },
  getData: function() {
    return $.ajax({
      url: "api/schedule",
      type: "GET"
    });
  // },
  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/examples/" + id,
  //     type: "DELETE"
  //   });
  }
};


var fillSchedule = function() {
  API.getData().then(function(data) {

    for(i=0; i<data.length; i++){

      
      var newRow = $("<tr>").append(
        $("<td>").text(data[i].firstName),
        $("<td>").text(data[i].lastName),
        $("<td>").text(data[i].date),
        $("<td>").text(data[i].startTime),
        $("<td>").text(data[i].endTime),
        );
        
        $("#schedule-data").append(newRow);
        console.log(newRow);
      }
    // var schedulePage = data.map(function(schedulePage) {
    //   var $a = $("<a>")
    //     .text(example.text)
    //     .attr("href", "/example/" + example.id);

    //   var $li = $("<li>")
    //     .attr({
    //       class: "list-group-item",
    //       "data-id": example.id
    //     })
    //     .append($a);

    //   var $button = $("<button>")
    //     .addClass("btn btn-danger float-right delete")
    //     .text("ｘ");

    //   $li.append($button);

    //   return $li;
    // });

    // $exampleList.empty();
    // $exampleList.append($examples);
  });
};

fillSchedule();

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
