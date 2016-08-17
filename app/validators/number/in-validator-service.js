(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('InValidatorService', InValidatorService);

    InValidatorService.$inject = ['ValidatorResponseFactory'];

    function InValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (data.initial < model && model < data.end);
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
