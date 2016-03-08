(function(){
	'use strict'

	/**
	*  Module
	*
	* Description
	*/
	angular.module('store').controller('StoreController', StoreController);

  StoreController.$inject = ['$http'];

	function StoreController($http){
		
    var store = this;
    store.products = [];

    $http
      .get('app/general/products.json')
      .success(function(data){
        store.products = data;
      });

	}

})();