(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxTimeValidatorService', MaxTimeValidatorService);

    MaxTimeValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxTimeValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setDate(1);
            formatedAnswer.setMonth(0);
            formatedAnswer.setFullYear(1970);
            var formatedReference = new Date(data.reference);
            formatedReference.setDate(1);
            formatedReference.setMonth(0);
            formatedReference.setFullYear(1970);
            var result = (formatedAnswer <= formatedReference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
