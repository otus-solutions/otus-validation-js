(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerCaseValidatorService', LowerCaseValidatorService);

    LowerCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function LowerCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference) {
                result = answer.data.toString().toLowerCase();
            } else {
                result = answer.data.toString();
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
