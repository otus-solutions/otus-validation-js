(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinTimeValidatorService', MinTimeValidatorService);

    MinTimeValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinTimeValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            //Hora mínima esperada.

            // var result = ();
            // return ValidatorResponseFactory.create(model, data, result);
        }
    }
    
}());
