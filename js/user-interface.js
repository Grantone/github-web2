var Repo = require('./../js/user.js').repoModule



$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var repoName = $('#goal').val()
    console.log(repoName);
    var data = new Repo()
    data.getRepos(repoName)
  });
  // appender()

});
