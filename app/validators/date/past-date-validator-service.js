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
            if (data.reference == true) {
                var result = (model < new Date());
            } else {
                return;
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
