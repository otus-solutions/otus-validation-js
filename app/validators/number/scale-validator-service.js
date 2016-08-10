(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ScaleValidatorService', ScaleValidatorService);

    ScaleValidatorService.$inject = ['ValidatorResponseFactory'];

    function ScaleValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            //Quantidade de casas decimais do número

            var result = (model == data.reference);
            return ValidatorResponseFactory.create(model, data, result);

        }
    }

}());
