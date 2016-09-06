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
            console.log(answer);
            var result = (angular.equals({}, answer)) ? true : false;
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
