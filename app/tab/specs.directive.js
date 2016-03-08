(function(){

	'use strict'

	angular
		.module('store')
		.directive('productSpecs', productSpecs);

	function productSpecs(){

		return {
			restrict: 'E',
			templateUrl: 'app/tab/product.specs.html'
		};
	}
})();