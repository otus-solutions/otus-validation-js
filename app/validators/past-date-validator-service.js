(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PastDateValidatorService', PastDateValidatorService);

    PastDateValidatorService.$inject = ['ValidationResponseFactory'];

    function PastDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model < new Date());
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
