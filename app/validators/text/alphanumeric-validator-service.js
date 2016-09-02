(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('AlphanumericValidatorService', AlphanumericValidatorService);

    AlphanumericValidatorService.$inject = ['ValidatorResponseFactory'];

    function AlphanumericValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result;

            if (data.reference === true) {
                result = ValidatorResponseFactory.isValidAlphanumeric(model);
            } else {
                result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }
}());
