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
            //Indica que permite texto em maiúsculo.

            var result = (model == data.reference.toUpperCase());
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
