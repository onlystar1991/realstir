angular.module('map.controllers', [])

.controller('mapCtrl', function($rootScope, $state, $ionicScrollDelegate, $ionicSlideBoxDelegate, $scope, $ionicPlatform, $ionicHistory, $ionicLoading, mapService) {
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
			$state.go('surroundings');
		};

		$scope.goRight = function() {
			$state.go('map');
		};
	});
});