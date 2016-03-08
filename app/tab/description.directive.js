(function(){

	'use strict'

	angular
		.module('store')
		.directive('productDescription', productDescription);


	function productDescription(){

		return{
			restrict: 'E',
			templateUrl: 'app/tab/product.description.html'
		};
	}	

})();


