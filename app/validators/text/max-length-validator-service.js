(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxLengthValidatorService', MaxLengthValidatorService);

    MaxLengthValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxLengthValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model.length <= data.size);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
