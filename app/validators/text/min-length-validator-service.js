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
            var result = (answer.data.length >= data.size);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
