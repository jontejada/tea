var app = angular.module('teaApp',['ngRoute']);

app.controller('bodyController', function($scope) {
	$scope.data = data;
	$scope.getNumber = function(num) {
		// debugger
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

