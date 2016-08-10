(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('InValidatorService', InValidatorService);

    InValidatorService.$inject = ['ValidatorResponseFactory'];

    function InValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            //Verificar se o valor esta dentro de um lista de valores referencia.
            var result = (data.initial < model && model < data.end);
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
