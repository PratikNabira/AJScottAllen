(function() {

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(response) {
      $scope.user = response;
      if ($scope.user.avatar_url) {
        $scope.userProfileImage = true;
      }
      $scope.error = null;
      github.getRepos($scope.user).then(onUserReposComplete, onError);
    };

    var onUserReposComplete = function(response) {
      $scope.repos = response;
      // $location is UI related service
      // $location.hash("userDetails");
      // $anchorScroll();
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
      $scope.user = null;
      $scope.repos = null;
    };

    $scope.userName = $routeParams.username;
    $scope.selectedSort = '-stargazers_count';
    // $log.info("Searching for " + $scope.userName);
    github.getUser($scope.userName).then(onUserComplete, onError);

  };

  var module = angular.module("AJScottAllen");
  module.controller("UserController", ["$scope", "github", "$routeParams", UserController]);
  // Always registered controller later after it's variable declaration to avoid issue while minification

}());