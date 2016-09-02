(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    MandatoryValidatorService.$inject = ['ValidatorResponseFactory'];

    function MandatoryValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = !(typeof model == 'undefined' || model.length === 0);
            return ValidatorResponseFactory.create(model, data, result);
        }
    }

}());
