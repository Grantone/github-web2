$(document).ready(function() {
  $('#repo-name-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = githubUsername(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
})