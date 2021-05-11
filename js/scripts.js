$(document).ready(function() {
  $("form#flavors").submit(function (event) {
    const blanks = ["flavor1", "flavor2", "flavor3", "flavor4"];

    blanks.forEach(function(blank) {
      let userInput = $("input#" + blank).val();
      $("#output").append("<li>" + userInput + "</li>");
    });

    $("#list").show();

    event.preventDefault();
  });
});