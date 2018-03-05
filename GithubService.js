(function() {

  // no need to specify used $http service in either controller or in service 
  var github = function($http) {

    // https://api.github.com/users/angular - to fetch user details
    var getUser = function(userName) {
      return $http.get("https://api.github.com/users/" + userName)
        .then(function(response) {
          return response.data;
        });
    };

    // https://api.github.com/users/angular/repos - to fetch users repository
    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    // https://api.github.com/repos/angular/angular.js - to fetch repository details
    var getRepoDetails = function(userName, repoName) {
      var repo;
      var repoUrl = "https://api.github.com/repos/" + userName + "/" + repoName;
      
      return $http.get(repoUrl)
        .then(function(response) {
          repo = response.data;
          return $http.get(repoUrl + "/collaborators");
        })
        .then(function(response) {
          repo.collaborators = response.data;
          return repo;
        });
    };

    // https://api.github.com/repos/userName/angular.js/contributors - to fetch contributors of repository

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };

  };

  var module = angular.module("AJScottAllen");
  module.factory("github", github);

}());