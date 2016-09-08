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
            var result;

            if (data.reference === model.toString()) {
                var comma = result.split('.');
                if (comma[1] && comma[1].length === model) {
                    result = true;
                }
            } else {
                result = false;
            }

            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
