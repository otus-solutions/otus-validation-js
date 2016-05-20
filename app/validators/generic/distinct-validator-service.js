(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DistinctValidatorService', DistinctValidatorService);

    DistinctValidatorService.$inject = ['ValidatorResponseFactory'];

    function DistinctValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model != data.reference);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
