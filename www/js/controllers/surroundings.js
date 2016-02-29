angular.module('surroundings.controllers', [])

.controller('surroundingsCtrl', function($rootScope, $state, $ionicScrollDelegate, $ionicSlideBoxDelegate, $scope, $ionicPlatform, $ionicHistory, $ionicLoading, surroundingsService) {
	$ionicPlatform.ready(function() {
		
		$scope.goBack = function() {
			alert("Click Back Button");
		};

		$scope.goSetting = function() {
			alert("Click Setting Button");
		};

		$scope.refresh = function() {
			alert("Click Refresh Button");
		};

		$scope.goLeft = function() {
			$state.go('highway');
		};

		$scope.goRight = function() {
			$state.go('map');
		};
	});
});