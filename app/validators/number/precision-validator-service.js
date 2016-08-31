(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PrecisionValidatorService', PrecisionValidatorService);

    PrecisionValidatorService.$inject = ['ValidatorResponseFactory'];

    function PrecisionValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = data.reference.toString();

            if (result.length === model) {
                result = true;
            } else {
                result = false;
            }
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
