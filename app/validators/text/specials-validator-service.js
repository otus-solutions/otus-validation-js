(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('SpecialsValidatorService', SpecialsValidatorService);

    SpecialsValidatorService.$inject = ['ValidatorResponseFactory'];

    function SpecialsValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === true) {
                result = ValidatorResponseFactory.isValidSpecials(answer);
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }
}());
