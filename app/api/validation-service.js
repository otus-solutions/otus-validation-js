(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationService', ValidationService);

    ValidationService.$inject = ['ValidationPoolService'];

    function ValidationService(ValidationPoolService) {
        var self = this;
        self.registerElement = registerElement;
        self.unregisterElement = unregisterElement;
        self.validateElement = validateElement;
        self.validateAllElements = validateAllElements;
        self.initPool = initPool;
        self.resetPool = resetPool;

        function initPool() {
            ValidationPoolService.initPool();
        }

        function resetPool() {
            ValidationPoolService.initPool();
        }

        // TODO Registra um elemento que sera validado
        // quando invocado 
        function registerElement(elementRegister) {
            ValidationPoolService.persist(elementRegister);
        }

        // TODO Remove do Pool de Elementos registrados
        // um determinado elemento
        function unregisterElement(elementRegister) {
            ValidationPoolService.remove(elementRegister);
        }

        // TODO Invova os validadores de um determinado
        // elemento previamente registrado
        function validateElement() {

        }

        // TODO Invova os validadores de todos
        // elementos previamente registrados
        function validateAllElements() {

        }

    }

}());
