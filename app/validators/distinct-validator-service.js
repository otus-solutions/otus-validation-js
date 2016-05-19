(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DistinctValidatorService', DistinctValidatorService);

    DistinctValidatorService.$inject = ['ValidationResponseFactory'];

    function DistinctValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model != data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
