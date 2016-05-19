(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DateInValidatorService', DateInValidatorService);

    DateInValidatorService.$inject = ['ValidationResponseFactory'];

    function DateInValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (data.initial < model && model < data.end);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
