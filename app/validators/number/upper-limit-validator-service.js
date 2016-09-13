(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperLimitValidatorService', UpperLimitValidatorService);

    UpperLimitValidatorService.$inject = ['ValidatorResponseFactory'];

    function UpperLimitValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var result = (answer.data <= data.reference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
