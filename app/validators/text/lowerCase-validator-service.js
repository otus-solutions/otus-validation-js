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

            if(data.reference == true) {
                return result = model.toLowerCase();
            } else {
                return result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
