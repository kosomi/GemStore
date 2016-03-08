(function(){
	
	'use strict';

	angular.module('store').directive('productTabs', productTabs);


	function productTabs(){
		var directive = {
			restrict: 'E',
			templateUrl: 'app/tab/product.tabs.html',
			controller: function(){
				this.tab = 1;

				this.setTab = function(setTab){
			    	this.tab = setTab;
			    };
			    
			    this.isSet = function(tabValue){
			    	return this.tab === tabValue;
			    };
			},
			controllerAs: 'tab'
		};

		return directive;
	};
})();