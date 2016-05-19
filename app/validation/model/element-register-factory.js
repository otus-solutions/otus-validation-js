(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ElementRegisterFactory', ElementRegisterFactory);

    ElementRegisterFactory.$inject = ['ValidatorFactory'];

    function ElementRegisterFactory(ValidatorFactory) {
        var self = this;
        self.create = create;

        function create(id, model) {
            return new ElementRegister(id, model, ValidatorFactory);
        }

        return self;
    }

    function ElementRegister(id, model, ValidatorFactory) {
        var self = this;
        self.id = id;
        self.model = model;
        self.validators = [];
        self.addValidator = addValidator;
        self.runAllValidators = runAllValidators;

        function addValidator(name, data) {
            var validator = ValidatorFactory.create(name, data, self.model);
            self.validators.push(validator);
        }

        function runAllValidators(callback) {
            var response = [];

            self.validators.forEach(function(element, index, array) {
                response.push(element.execute());
            });

            callback(response);
        }
    }

}());
