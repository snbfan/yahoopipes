/**
 * @author DMEDUN
 */
  'use strict';
angular.module('yahoopipes', [])
    .service('pipeService', ['$q', '$http', function ($q,$http) {

        // jsonp fetch
        function fetch(pipeId) {
            var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + pipeId + '&_render=json&_callback=JSON_CALLBACK', deferred = $q.defer();
            $http.jsonp(url).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(status);
            });
            return deferred.promise;
        }

        // public API
        return {
            fetch: fetch
        };
    }])
    .controller('main', ['$scope', '$http', '$q', 'pipeService', function($scope, $http, $q, pipeService) {

        /**
         *
         * @type {string}
         */
        $scope.yahoopipes = 'PIPES!';

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
         * Do a call to yahoo, parses pipes into nice html
         *
         * @param param1
         * @param param2
         * @returns {boolean}
         */
        $scope.getPipes = function() {
            $scope.loading = true;
            // fetch some pipes
            pipeService.fetch($scope.pipeId).then(function(result) {
                // parse result if success
                $scope.pipes = result.value.items;
                $scope.loading = false;
            }, function(error) {
                // show error message if failed
                $scope.error = 'Sorry, we couldn\'t get any pipes.';
                $scope.loading = false;
            });
        };
    }]);