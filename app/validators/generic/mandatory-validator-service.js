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
          var result = true;
          if (data.reference) {
            result = (angular.equals(answer.data, {}) || isEmptyAnswer(answer)) ? false : true;
          }
            return ValidatorResponseFactory.create(answer, data, result);
        }

        function isEmptyAnswer(answer) {
          return answer.data === "" ? true : false;
        }
    }

}());
