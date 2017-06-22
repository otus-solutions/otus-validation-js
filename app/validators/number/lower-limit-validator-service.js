(function() {
  'use strict';

  angular
    .module('otus.validation')
    .service('LowerLimitValidatorService', LowerLimitValidatorService);

  LowerLimitValidatorService.$inject = ['ValidatorResponseFactory'];

  function LowerLimitValidatorService(ValidatorResponseFactory) {
    var self = this;
    self.execute = execute;

    function execute(answer, data) {

      if (angular.equals(answer.data, {})) {
        return ValidatorResponseFactory.create(answer, data, true);
      }
      var result = (answer.data >= data.reference);
      return ValidatorResponseFactory.create(answer, data, result);
    }
  }

}());
