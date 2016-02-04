var app = angular.module('teaApp',['ngRoute']);

app.controller('StoreController', function($scope,cartService) {

	$scope.data = data.map(function(obj) {
		if (!obj.quantity) {
			obj.quantity = 0;
		}
		obj.more = "1";
		return obj;
	}); //don't touch this

	console.log($scope.data);

	$scope.cartsize = 0;
	$scope.getNumber = function(num) {
		return new Array(num);
	};

	updateCartbutton(cartService, $scope);

	$scope.add = function(tea) {

		if (cartService.indexOf(tea) === -1) {
			var numberToAdd = parseInt(tea.more);
			tea.quantity += numberToAdd;
			cartService.push(tea);
		} else {
			var teaIndex = cartService[cartService.indexOf(tea)];
			var number = parseInt(teaIndex.more);
			teaIndex.quantity += number;
		}

		updateCartbutton(cartService, $scope);
		
	};
});

app.controller('CartController', function($scope,cartService) {

	$scope.data = cartService;
	$scope.totalPrice = 0;
	updateTotalPrice(cartService, $scope);

	$scope.save = function(toggle) {
		updateTotalPrice(cartService, $scope);
		toggle = !toggle;
		return toggle;
	} 

	$scope.delete = function(oneTea) {
		oneTea.quantity = 0;
		var index = cartService.indexOf(oneTea);
		cartService.splice(index, 1);
		updateTotalPrice(cartService, $scope);
	}
});

function updateTotalPrice(cartService, $scope) {
	$scope.totalPrice = 0;
	cartService.forEach(function(obj) {
		$scope.totalPrice += obj.quantity * obj.price;
	});
}

function updateCartbutton(cartService, $scope) {
	$scope.cartsize = 0;
	cartService.forEach(function(obj) {
			$scope.cartsize += obj.quantity;
	});
}

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