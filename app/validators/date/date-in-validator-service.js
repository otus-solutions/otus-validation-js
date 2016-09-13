(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DateInValidatorService', DateInValidatorService);

    DateInValidatorService.$inject = ['ValidatorResponseFactory'];

    function DateInValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, reference) {
            var formatedAnswer = new Date(answer.data).setHours(0,0,0,0);
            var initialDate = new Date(reference.initial).setHours(0,0,0,0);
            var endDate = new Date(reference.end).setHours(0,0,0,0);
            var result = (endDate > formatedAnswer && formatedAnswer > initialDate);
            return ValidatorResponseFactory.create(answer, reference, result);
        }
    }

}());
