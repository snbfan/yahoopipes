'use strict';
angular.module('yahoopipes').controller('pipeItemController', ['$scope', '$routeParams', 'localCacheService', function($scope, $routeParams, localCacheService) {

     /**
     *
     * @type {Object} container for current pipe
     */
    $scope.pipe = null;

    /**
     *
     * @type {string} error message
     */
    $scope.error = '';

    /**
     *
     * @type {boolean} state trigger
     */
    $scope.loading = false;

    /**
     *
     * @type {string} pipe id
     */
    $scope.pipeId = null;

    /**
     * Shows spinner
     *  
     */
    $scope.showSpinner = function() {
        $scope.loading = true;
    };
    
    /**
     * Hides spinner
     *  
     */
    $scope.hideSpinner = function() {
        $scope.loading = false;
    };
    
    /**
     * Sets and show error message from pipe service
     * 
     * @type {string} error message 
     */
    $scope.showError = function(error) {
        $scope.error = error || "Sorry, we couldn\'t get any pipes."; 
    };

    /**
     * Do a call to yahoo, parses pipes into nice html
     *
     */
    $scope.getPipeObject = function() {
        // $scope.showSpinner();
        $scope.pipeId = parseInt($routeParams.pipeId) - 1;
        // fetch pipes
        localCacheService.getById($scope.pipeId).then(function(item) {
            // parse result if success
            $scope.pipe = item;
            $scope.hideSpinner();
        }, function(error) {
            // show error message if failed
            $scope.showError(error);
            $scope.hideSpinner();
        });
    };
    
    $scope.getPipeObject();
    
}]);
