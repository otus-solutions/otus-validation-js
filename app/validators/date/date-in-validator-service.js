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
            var formatedAnswer = new Date(answer.data);
            var check = (new Date(reference.initial) < formatedAnswer && formatedAnswer < new Date(reference.end));
            var result = !check;

            return ValidatorResponseFactory.create(answer, reference, result);
        }
    }

}());
