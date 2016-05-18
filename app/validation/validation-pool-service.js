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
        self.initPool = initPool;

        initPool();

        function initPool() {
            self.pool = [];
        }

        // TODO Salva Elemento no Pool de Elementos
        function persist(elementRegister) {
            console.log('Elemento registrado no pool');
            console.dir(self.pool);
            self.pool.push(elementRegister);
        }

        // TODO Remove Elemento do Pool de Elementos
        function remove(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    self.pool.remove(index);
                }
            });
        }

        // TODO Busca Elemento no pool utilizando ID
        function fetch(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    return element;
                }
            });
        }
    }

}());
