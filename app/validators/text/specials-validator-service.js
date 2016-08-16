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
            var result;
            //Indica que permite digitar caracteres especiais no texto se true. Ex: %$&@
            //valida o campo digitado, se contem caracteres especiais

            if (data.reference == true) {
                return result = ValidatorResponseFactory.isValidSpecials(model);
            } else {
                return result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }
}());
