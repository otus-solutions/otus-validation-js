(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('FutureDateValidatorService', FutureDateValidatorService);

    FutureDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function FutureDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result;
            if (data.reference === true) {
                result = (model > new Date());
            } else {
                return;
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
