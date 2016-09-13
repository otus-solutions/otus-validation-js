(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('InValidatorService', InValidatorService);

    InValidatorService.$inject = ['ValidatorResponseFactory'];

    function InValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var result = (data.initial < answer.data && answer.data < data.end);
            return ValidatorResponseFactory.create(answer, data, result);

        }
    }

}());
