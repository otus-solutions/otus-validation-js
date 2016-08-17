(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ScaleValidatorService', ScaleValidatorService);

    ScaleValidatorService.$inject = ['ValidatorResponseFactory'];

    function ScaleValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = data.reference.toString();
            var comma = result.split('.');

            if (comma[1].length === model) {
                return true;
            } else {
                return false;
            }

            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
