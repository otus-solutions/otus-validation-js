(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('SpecialsValidatorService', SpecialsValidatorService);

    SpecialsValidatorService.$inject = ['ValidatorResponseFactory'];

    function SpecialsValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            //Indica que permite digitar caracteres especiais no texto se true. Ex: %$&@

            // if (data.reference == true) {
            //
            // } else {
            //
            // }
            // return ValidatorResponseFactory.create(model, data, result);
        }
    }
}());
