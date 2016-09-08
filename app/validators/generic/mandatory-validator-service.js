(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    MandatoryValidatorService.$inject = ['ValidatorResponseFactory'];

    function MandatoryValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            console.log('mandatory');
            console.log(answer.data);
            var result = (angular.equals(answer.data, {})) ? false : true;
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
