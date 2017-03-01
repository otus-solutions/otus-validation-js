(function() {
  'use strict';

  angular
    .module('otus.validation')
    .service('MinTimeValidatorService', MinTimeValidatorService);

  MinTimeValidatorService.$inject = [
     'ValidatorResponseFactory',
     'GlobalTimeService'
  ];

  function MinTimeValidatorService(ValidatorResponseFactory, GlobalTimeService) {
    var self = this;
    self.execute = execute;

    function execute(answer, data) {
      if (angular.equals(answer.data, {})) {
        return ValidatorResponseFactory.create(answer, data, true);
      }
      var result = _compareTime(answer.data, data.reference.value);
      return ValidatorResponseFactory.create(answer, data, result);
    }

    function _compareTime(answer, reference) {
      var dateReference = GlobalTimeService.getMiliTime(reference);
      var ansRef = GlobalTimeService.getMiliTime(answer);
      return ansRef >= dateReference;
    }
  }

}());
