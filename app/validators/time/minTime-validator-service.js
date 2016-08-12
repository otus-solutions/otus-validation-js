(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinTimeValidatorService', MinTimeValidatorService);

    MinTimeValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinTimeValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model >= data.reference);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
