'use strict';
angular.module('yahoopipes').controller('pipeController', ['$scope', '$http', '$q', 'pipeService', function($scope, $http, $q, pipeService) {

    /**
     *
     * @type {string}
     */
    $scope.yahoopipes = 'GET PIPES!';

    /**
     *
     * @type {Array} result data container
     */
    $scope.pipes = [];

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
    $scope.pipeId = '74fc14a798efee89310bea2b56f99336';

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
     * @param param1
     * @param param2
     * @returns {boolean}
     */
    $scope.getPipes = function() {
        $scope.showSpinner();
        // fetch pipes
        pipeService.fetch($scope.pipeId).then(function(items) {
            // parse result if success
            $scope.pipes = items;
            $scope.hideSpinner();
        }, function(error) {
            // show error message if failed
            $scope.showError(error);
            $scope.hideSpinner();
        });
    };
}]);
