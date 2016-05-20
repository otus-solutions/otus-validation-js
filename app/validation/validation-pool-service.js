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
        self.initPool = initPool;

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
                    self.pool.splice(index, 1);
                }
            });
        }

        function fetch(idElementRegister) {
            var founded = {};

            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    founded = element;
                }
            });

            return founded;
        }

        function fetchAll() {
            return self.pool;
        }
    }

}());
