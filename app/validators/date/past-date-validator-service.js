(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PastDateValidatorService', PastDateValidatorService);

    PastDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function PastDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result;
            if (data.reference === true) {
                result = (model < new Date());
            } else {
                return;
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
