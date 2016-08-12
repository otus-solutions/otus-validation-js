(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxTimeValidatorService', MaxTimeValidatorService);

    MaxTimeValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxTimeValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model <= data.reference);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
