(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationPoolService', ValidationPoolService);

    function ValidationPoolService() {
        var self = this;

        self.persist = persist;
        self.remove = remove;
        self.fetch = fetch;
        self.fetchAll = fetchAll;

        initPool();

        function initPool() {
            self.pool = [];
        }

        function persist(elementRegister) {
            self.pool.push(elementRegister);
        }

        function remove(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    self.pool.remove(index);
                }
            });
        }

        function fetch(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    return element;
                }
            });
        }

        function fetchAll() {
            return self.pool;
        }
    }

}());
