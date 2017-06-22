(function() {
  'use strict';

  angular
    .module('otus.validation')
    .service('MinSelectedValidatorService', Service);

  Service.$inject = ['ValidatorResponseFactory'];

  function Service(ValidatorResponseFactory) {
    var self = this;
    self.execute = execute;

    function execute(answer, data) {

      if (angular.equals(answer.data, {})) {
        return ValidatorResponseFactory.create(answer, data, true);
      }
      var result = (_getTrueOccurrences(answer.data).length >= data.reference);
      return ValidatorResponseFactory.create(answer, data, result);
    }

    function _getTrueOccurrences(array) {
      var arrayWithTrueValues = array.filter(function(checkboxAnswerObject) {
        if (checkboxAnswerObject.state) {
          return checkboxAnswerObject;
        }
      });

      return arrayWithTrueValues;
    }

  }

}());
