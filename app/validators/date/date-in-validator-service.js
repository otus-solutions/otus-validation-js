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
            var formatedAnswer = new Date(answer.data).toLocaleDateString();
            var result = (new Date(reference.initial).toLocaleDateString() < formatedAnswer && formatedAnswer < new Date(reference.end).toLocaleDateString());
            return ValidatorResponseFactory.create(answer, reference, result);
        }
    }

}());
