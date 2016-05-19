(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinDateValidatorService', MinDateValidatorService);

    MinDateValidatorService.$inject = ['ValidationResponseFactory'];

    function MinDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model >= data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
