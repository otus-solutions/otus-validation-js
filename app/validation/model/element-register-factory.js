(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ElementRegisterFactory', ElementRegisterFactory);

    ElementRegisterFactory.$inject = ['ValidatorFactory', 'ValidationResponseFactory'];

    function ElementRegisterFactory(ValidatorFactory, ValidationResponseFactory) {
        var self = this;
        self.create = create;

        function create(id, answer) {
            return new ElementRegister(id, answer, ValidatorFactory, ValidationResponseFactory);
        }

        return self;
    }

    function ElementRegister(id, answer, ValidatorFactory, ValidationResponseFactory) {
        var self = this;
        self.id = id;
        self.answer = answer;
        self.validators = [];
        self.addValidator = addValidator;
        self.runAllValidators = runAllValidators;

        function addValidator(name, data) {
            var validator = ValidatorFactory.create(name, data, self.answer);
            self.validators.push(validator);
        }

        function runAllValidators(callback) {
            var validationResponse = ValidationResponseFactory.create(self.id);

            self.validators.forEach(function(element, index, array) {
              if (element.name !== 'accept') {
                validationResponse.addValidatorResponse(element.execute());
              }
            });

            callback(validationResponse);
        }
    }

}());
