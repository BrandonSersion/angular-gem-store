(function() {
  'use strict';
  angular
    .module("gemStore", [])
    .controller("StoreCtrl", function ($http, $scope) {
      $http.get("./assets/products.json").then(function (response) {
        $scope.products = response.data;

      })

    });

}());
