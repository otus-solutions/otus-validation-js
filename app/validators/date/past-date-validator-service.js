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
            var result;
            if (data.reference === true) {
                answer.setHours(0, 0, 0, 0);
                result = (answer < new Date().setHours(0, 0, 0, 0));
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
