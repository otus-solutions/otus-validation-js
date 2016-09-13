(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxDateValidatorService', MaxDateValidatorService);

    MaxDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {

            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }

            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setHours(0, 0, 0, 0);
            var maxDate = new Date(data.reference);
            maxDate.setHours(0, 0, 0, 0);
            var result = (formatedAnswer <= maxDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
