(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinDateValidatorService', MinDateValidatorService);

    MinDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setHours(0, 0, 0, 0);
            var minDate = new Date(data.reference);
            minDate.setHours(0, 0, 0, 0);
            var result = (formatedAnswer >= minDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
