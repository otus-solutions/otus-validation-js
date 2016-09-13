(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxLengthValidatorService', MaxLengthValidatorService);

    MaxLengthValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxLengthValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var result = (answer.data.length <= data.size);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
