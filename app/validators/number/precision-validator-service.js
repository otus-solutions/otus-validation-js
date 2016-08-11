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
            //	Quantidade total de dígitos do número. Questão Integer.

            var result = data.reference.toString();
            if (result.length === model) {
                return true;
            } else {
                return false;
            }
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
