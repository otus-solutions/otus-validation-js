(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ElementRegisterFactory', ElementRegisterFactory);

    ElementRegisterFactory.$inject = ['ValidatorFactory', 'ValidationResponseFactory'];

    function ElementRegisterFactory(ValidatorFactory, ValidationResponseFactory) {
        var self = this;
        self.create = create;

        function create(id, model) {
            return new ElementRegister(id, model, ValidatorFactory, ValidationResponseFactory);
        }

        return self;
    }

    function ElementRegister(id, model, ValidatorFactory, ValidationResponseFactory) {
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
            var validationResponse = ValidationResponseFactory.create(self.id);

            self.validators.forEach(function(element, index, array) {
                validationResponse.addValidatorResponse(element.execute());
            });

            callback(validationResponse);
        }
    }

}());
