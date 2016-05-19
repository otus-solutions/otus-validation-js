(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxLengthValidatorService', MaxLengthValidatorService);

    MaxLengthValidatorService.$inject = ['ValidationResponseFactory'];

    function MaxLengthValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model.length <= data.size);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
