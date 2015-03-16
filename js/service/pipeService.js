'use strict';
angular.module('yahoopipes').service('pipeService', ['$q', '$http', function ($q,$http) {
    
    // jsonp fetch
    function fetch(pipeId) {
    
        var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + pipeId + '&_render=json&_callback=JSON_CALLBACK', deferred = $q.defer();
        
        $http.jsonp(url).success(function (data, status, headers, config) {
            deferred.resolve(data.value.items);
        }).error(function (data, status, headers, config) {
            deferred.reject(status);
        });

        return deferred.promise;

    }

    // public API
    return {
        fetch: fetch
    };
}]);
