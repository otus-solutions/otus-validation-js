(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('AlphanumericValidatorService', AlphanumericValidatorService);

    AlphanumericValidatorService.$inject = ['ValidatorResponseFactory'];

    function AlphanumericValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result;
            //Indica que permite digitar caracteres especiais no texto se true. Ex: %$&@
            //valida o campo digitado, se contem caracteres alphanumericos

            if (data.reference == true) {
                return result = ValidatorResponseFactory.isValidAlphanumeric(model);
            } else {
                return result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }
}());
