(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PastDateValidatorService', PastDateValidatorService);

    PastDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function PastDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;
            if (data.reference === true) {
                var formatedAnswer = new Date(answer.data).setHours(0, 0, 0, 0);
                var todayDate = new Date().setHours(0, 0, 0, 0);
                result = (formatedAnswer <= todayDate);
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
