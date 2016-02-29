angular.module('highway.controllers', [])

.controller('highwayCtrl', function($rootScope, $state, $http, $ionicScrollDelegate, $ionicSlideBoxDelegate, $scope, $ionicPlatform, $ionicHistory, $ionicLoading, highwayService) {
		
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
		alert("Left Page");
	};

	$scope.goRight = function() {
		$state.go('surroundings');
	};

	$scope.items = [1, 2, 3, 4, 5, 6, 7];

	$scope.doRefresh = function() {
		$http.get('/new-items')
		.success(function(newItems) {
			$scope.items = newItems;
		})
		.finally(function() {
			// Stop the ion-refresher from spinning
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
});