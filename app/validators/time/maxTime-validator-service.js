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
            var dayPadronizer = new Date('Thu Jan 01 1970 ');
            var formatedAnswer = new Date(answer.data);
            console.log(formatedAnswer);
            var result = (new Date(dayPadronizer + new Date(answer.data).toLocaleTimeString()) <= new Date(dayPadronizer + new Date(data.reference).toLocaleTimeString()));
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
