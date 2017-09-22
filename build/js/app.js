(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fb75f267ae9db871cbb9035d7074b596f95f6483"

},{}],2:[function(require,module,exports){
// var apiKey = require('./../.env').apiKey;
//
// function User() {}
//
// User.prototype.getUser = function(githubuser){
//   $.get('https://api.github.com/users/' + githubuser + '/?access_token=' + apiKey).then(function(response){
//   	 console.log(response);
//     $('.username').html('<h2 id="githubuser">' + response.name + '</h2><img id="user-avatarImage" src=' + response.avatar_url + '>');
//   }).fail(function(error){
//
//     $('#error').text(githubuser + ' could not be found, please enter a valid username');
//
// });
//   $.get('https://api.github.com/users/' + githubuser + '/repos?access_token=' + apiKey).then(function(response){
//   	for (var n = 0; n <= response.length; n++)
//       // $('#repo').empty();
//       if (response[n].description === null) {
//       $('#repo').append('<li><a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name + '</p><p>Oops no description here!!!! </p></a></li>');
//     } else {
//       $('#repo').append('<li><a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name +'</p><p>' + response[n].description + '</p></a></li>');
//     }
//     // console.log(response);
//   }).fail(function(error){
//
//   });
// };
var apiKey = require("./../.env").apiKey

function Repo() {

}


Repo.prototype.getRepos = function(repoName) {
  $.get('https://api.github.com/users/' + repoName + '/repos?access_token='+apiKey).then(function(response) {

    dat = JSON.stringify(response)
    data = JSON.parse(dat)
    console.log(data);
    $('#solution').empty()
    for (var i = 0; i < data.length; i++) {
      // $('.card').append('<div class="card-header">' + data[i].name + '</div>')
      $('#solution').append('<li> repo name: ' + data[i].name+'  the description: ' +data[i].description+ '</li>')
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.repoModule = Repo;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/user.js":2}]},{},[3]);
