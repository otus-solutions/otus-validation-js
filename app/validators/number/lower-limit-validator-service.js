(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerLimitValidatorService', LowerLimitValidatorService);

    LowerLimitValidatorService.$inject = ['ValidatorResponseFactory'];

    function LowerLimitValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model > data.reference);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
