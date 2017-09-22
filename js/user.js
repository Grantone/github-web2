
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
