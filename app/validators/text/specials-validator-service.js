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
            var code, i, len;
            //Indica que permite digitar caracteres especiais no texto se true. Ex: %$&@

            if (data.reference == true) {
                for (i = 0, len = str.length; i < len; i++) {
                    code = str.charCodeAt(i);
                    if ((code >= 33 && code <= 47) &&
                        (code >= 58 && code <= 64) &&
                        (code >= 123 && code <= 248)) {
                        return true;
                    }
                    return false;
                }
            } else {

            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }
}());
