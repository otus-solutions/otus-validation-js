(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('FutureDateValidatorService', FutureDateValidatorService);

    FutureDateValidatorService.$inject = ['ValidationResponseFactory'];

    function FutureDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model > new Date());
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
