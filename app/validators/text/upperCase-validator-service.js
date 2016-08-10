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
            //switch

            var result = (model == data.toUpperCase());
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
