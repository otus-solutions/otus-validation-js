(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PrecisionValidatorService', PrecisionValidatorService);

    PrecisionValidatorService.$inject = ['ValidatorResponseFactory'];

    function PrecisionValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
          //	Quantidade total de dígitos do número. Somente Integer
          // var result = ();
          // return ValidatorResponseFactory.create(model, data result);
        }
    }

}());
