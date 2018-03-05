(function() {

  var MainController = function($scope, $interval, $location) {

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.searchUserWithName($scope.userName);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {
      // 3rd parameter in $interval service is how to many times to run service
      countdownInterval = $interval(decrementCountdown, 2000, $scope.countdown);
    };

    $scope.searchUserWithName = function(userName) {
      if (countdownInterval) {
        // Will cancel only this particular $interval service with value in countdownInterval
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + userName);
    };

    $scope.userName = "angular";
    $scope.countdown = 5;
    startCountdown();

  };

  var module = angular.module("AJScottAllen");
  module.controller("MainController", ["$scope", "$interval", "$location", MainController]);
  // Always registered controller later after it's variable declaration to avoid issue while minification

}());