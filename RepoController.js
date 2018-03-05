(function() {
  
  var module = angular.module("AJScottAllen");
  
  var RepoController = function($scope, github, $routeParams) {
    
    var onRepo = function(data) {
      $scope.repo = data;
    };
    
    var onError = function(reason) {
      $scope.error = reason;
    };
    
    var username = $routeParams.username;
    var reponame = $routeParams.reponame;
    
    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
    
  };
  
  module.controller("RepoController", ["$scope", "github", "$routeParams", RepoController]);
  // Always registered controller later after it's variable declaration to avoid issue while minification
  
}());