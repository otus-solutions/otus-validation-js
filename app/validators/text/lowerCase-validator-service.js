(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerCaseValidatorService', LowerCaseValidatorService);

    LowerCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function LowerCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result;

            if (data.reference == true) {
                result = model.toString().toLowerCase();
            } else {
                result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
