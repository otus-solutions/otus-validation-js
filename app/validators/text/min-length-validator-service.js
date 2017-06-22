(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinLengthValidatorService', MinLengthValidatorService);

    MinLengthValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinLengthValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = (answer.data.length >= data.reference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
