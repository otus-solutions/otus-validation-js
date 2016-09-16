(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('AlphanumericValidatorService', AlphanumericValidatorService);

    AlphanumericValidatorService.$inject = ['ValidatorResponseFactory'];

    function AlphanumericValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
          return ValidatorResponseFactory.create(answer, data, result);
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === true) {
                result = ValidatorResponseFactory.isValidAlphanumeric(answer);
            } else {
                result = answer.toString();
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }
}());
