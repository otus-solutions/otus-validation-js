(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperCaseValidatorService', UpperCaseValidatorService);

    UpperCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function UpperCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result;

            if (data.reference == true) {
                result = model.toString().toUpperCase();
            } else {
                result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
