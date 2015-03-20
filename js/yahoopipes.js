'use strict';
angular.module('yahoopipes', ['ngRoute']).config(['$routeProvider',
function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'partials/main.html',
        controller : 'pipeController'
    }).when('/:pipeId', {
        templateUrl : 'partials/pipe.html',
        controller : 'pipeItemController'
    }).otherwise({
        redirectTo : '/'
    });
}]);
