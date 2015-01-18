function CartController($scope) {
	$scope.items = [
		{title: "paint pots", quantity: 8, price: 3.95},
		{title: "Nintendo 3ds", quantity: 2, price: 50.00},
		{title: "xbox controller", quantity: 1, price: 37.95}
	];

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}
}