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
            var result = true;
            var splitedAnswer = (answer.data.toString().split('.'));
            if (splitedAnswer[1]) {
                result = (splitedAnswer[1].length === 0 || data.reference === splitedAnswer[1].length);
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }
}());
