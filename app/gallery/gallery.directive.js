(function(){
	
	'use strict';

	angular.module('store').directive('productGallery', productGallery);

	function productGallery(){

		var directive = {
			restrict: 'E',
			templateUrl: 'app/gallery/product.gallery.html',
			controller: function(){
				this.current = 0;
	
				this.setCurrent = function(index){
			      this.current = index;
			    };
			},
			controllerAs: 'gallery'
		};	

		return directive;
	};

})();