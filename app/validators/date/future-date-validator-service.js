(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('FutureDateValidatorService', FutureDateValidatorService);

    FutureDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function FutureDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var result;
            if (data.reference === true) {
                result = (new Date(answer) > new Date());
            } else {
                result=true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
