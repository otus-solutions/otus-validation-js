(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxDateValidatorService', MaxDateValidatorService);

    MaxDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model <= new Date(data.reference));
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
