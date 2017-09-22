// var User =  require('./../js/user.js').userModule;
//
// $(document).ready(function () {
//
// 	var currentUserObject = new User();
// 	$('form').submit(function (event) {
// 		event.preventDefault();
// 		var githubuser = $('#github-username').val();
// 		console.log(githubuser);
// 		$('#github-username').val("");
// 		$('#repo').empty("");
// 		$('#error').empty("");
// 		$('.username').empty("");
// 		// $('.username').text(githubuser);
// 		currentUserObject.getUser(githubuser);
// 	});
// });
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
