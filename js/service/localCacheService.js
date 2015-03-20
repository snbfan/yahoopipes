'use strict';
angular.module('yahoopipes').service('localCacheService', ['$q', function ($q) {
    
    /**
     *
     * @type {array} collection of pipes 
     */
    var collection = false;
    
    /**
     * Saves pipes collection into local "cache"
     * 
     * @param {array} pipes collection
     */
    function setCollection(pipes) {
        collection = pipes;
    }
    
    /**
     * Returns pipes collection
     * 
     * @returns {array|boolean} collection or nothing 
     */
    function getCollection() {
        return collection;
    }    
    

    /**
     * Get item from a collection by id;
     * 
     * @param {string} id
     * @returns {object} promise
     */
    function getById(id) {
        
        var deferred = $q.defer(),
            error = "We wasn't able to find an item.";
        
        if (collection && collection.length > 0) {
            if (collection[id] != undefined) {
                deferred.resolve(collection[id]);                
            } else {
                deferred.reject(error);
            }
        } else {
            deferred.reject(error);
        }
        
        return deferred.promise;
    }
    

    // public API
    return {
        setCollection: setCollection,
        getCollection: getCollection, 
        getById: getById
    };
}]);
