var apiKey = require('./../.env').apiKey;

user = function(){
}

Weather.prototype.getProfile = function() {
  $.get('https://github.user.name=' + profile + '&appid=' + apiKey).then(function(response) {
    console.log(response.user.name);
    return github.user.profile;
  }).fail(function(error) {
    $('.showprofile').text(error.responseJSON.message);
  });
}

exports.github.users.name = github;