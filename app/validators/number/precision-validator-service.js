(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PrecisionValidatorService', PrecisionValidatorService);

    PrecisionValidatorService.$inject = ['ValidatorResponseFactory'];

    function PrecisionValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === answer.data.toString().length) {
                result = true;
            } else {
                result = false;
            }
            return ValidatorResponseFactory.create(answer, data, result);

        }
    }

}());
