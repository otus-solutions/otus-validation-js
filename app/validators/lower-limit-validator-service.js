(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerLimitValidatorService', LowerLimitValidatorService);

    LowerLimitValidatorService.$inject = ['ValidationResponseFactory'];

    function LowerLimitValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model > data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
