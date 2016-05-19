(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxTimeValidatorService', MaxTimeValidatorService);

    MaxTimeValidatorService.$inject = ['ValidationResponseFactory'];

    function MaxTimeValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            // TODO Analisar retorno do tipo de componente para comparação 
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());
