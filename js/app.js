var app = angular.module('teaApp',['ngRoute']);

app.controller('BodyController', function($scope) {
	$scope.data = data;
	$scope.getNumber = function(num) {
		return new Array(num);
	};
	$scope.add = function(qty) {
		if (!qty) {
			qty = 1;
		} else {
			qty = Number(qty);
		}
		console.log(qty);
	};
});

app.filter('stockFilter', function(){
	return function(input){
		return input.toString().replace("true","In Stock").replace("false","Out of Stock");
	};
});

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/store.html',
			controller: 'BodyController'
		});
});

