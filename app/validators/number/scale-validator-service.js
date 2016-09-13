(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ScaleValidatorService', ScaleValidatorService);

    ScaleValidatorService.$inject = ['ValidatorResponseFactory'];

    function ScaleValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;
            var splitedAnswer = (answer.data.toString().split('.'));
            if (splitedAnswer[1]) {
                result = (data.reference === splitedAnswer[1].length);
            } else {
                result = false;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }
}());
