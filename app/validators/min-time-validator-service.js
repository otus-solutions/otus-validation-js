(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinTimeValidatorService', MinTimeValidatorService);

    MinTimeValidatorService.$inject = ['ValidationResponseFactory'];

    function MinTimeValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            // TODO Analisar retorno do tipo de componente para comparação 
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
