(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperLimitValidatorService', UpperLimitValidatorService);

    UpperLimitValidatorService.$inject = ['ValidatorResponseFactory'];

    function UpperLimitValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model < data.reference);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
