(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperCaseValidatorService', UpperCaseValidatorService);

    UpperCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function UpperCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var result;

            if (data.reference === true) {
                result = answer.toString().toUpperCase();
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
