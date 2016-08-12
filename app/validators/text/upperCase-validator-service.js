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
            if (data.reference == true) {
                return model.toUpperCase();
            } else {
                return model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
