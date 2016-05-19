(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperLimitValidatorService', UpperLimitValidatorService);

    UpperLimitValidatorService.$inject = ['ValidationResponseFactory'];

    function UpperLimitValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model < data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
