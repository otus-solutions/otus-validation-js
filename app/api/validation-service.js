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

        function registerElement(elementRegister) {
            ValidationPoolService.persist(elementRegister);
        }

        function unregisterElement(elementRegister) {
            ValidationPoolService.remove(elementRegister);
        }

        function validateElement(idElementRegister, callback) {
            var response = [];

            var elementRegister = ValidationPoolService.fetch(idElementRegister);
            elementRegister.runAllValidators(function(responseElement) {
                response.push(responseElement);
            });

            callback(response);
        }

        function validateAllElements(callback) {
            var response = [];
            var allElements = ValidationPoolService.fetchAll();
            allElements.forEach(function(element, index, array) {
                element.runAllValidators(function(responseElement) {
                    response.push(responseElement);
                });
            });

            callback(response);
        }
    }

}());
