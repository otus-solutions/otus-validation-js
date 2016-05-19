(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    MandatoryValidatorService.$inject = ['ValidationResponseFactory'];

    function MandatoryValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = !(typeof model == 'undefined' || model.length == 0);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
