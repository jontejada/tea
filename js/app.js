var app = angular.module('teaApp',['ngRoute']);

app.controller('StoreController', function($scope,cartService) {
	$scope.data = data; //don't touch this
	$scope.cartsize = cartService.length;
	$scope.getNumber = function(num) {
		return new Array(num);
	};
	$scope.add = function(tea) {
		var qty = Number(tea.quantity);
		if (!qty) {
			qty = 1;
		} else {
			qty = Number(qty);
		}
		// console.log(tea);
		// console.log(qty);
		cartService.push(tea);
		console.log(cartService);
		$scope.cartsize += qty;
	};
});

app.controller('CartController', function($scope,cartService) {

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
			controller: 'StoreController'
		})
		.when('/cart', {
			templateUrl: 'partials/cart.html',
			controller: "CartController"
		});
});


app.service('cartService', [function() {
	return [];
}]);