(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxDateValidatorService', MaxDateValidatorService);

    MaxDateValidatorService.$inject = ['ValidationResponseFactory'];

    function MaxDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model <= data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
