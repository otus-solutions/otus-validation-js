(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DateInValidatorService', DateInValidatorService);

    DateInValidatorService.$inject = ['ValidatorResponseFactory'];

    function DateInValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {

            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }

            var formatedAnswer = new Date(answer.data).setHours(0, 0, 0, 0);
            var initialDate = new Date(data.reference.initial.value).setHours(0, 0, 0, 0);
            var endDate = new Date(data.reference.end.value).setHours(0, 0, 0, 0);
            var result = (endDate >= formatedAnswer && formatedAnswer >= initialDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
