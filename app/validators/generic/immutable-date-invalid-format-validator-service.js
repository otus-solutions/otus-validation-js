(function() {
  'use strict';

  angular
    .module('otus.validation')
    .service('ImmutableDateInvalidFormatValidatorService', ImmutableDateInvalidFormatValidatorService);

  ImmutableDateInvalidFormatValidatorService.$inject = ['ValidatorResponseFactory'];

  function ImmutableDateInvalidFormatValidatorService(ValidatorResponseFactory) {
    var self = this;
    self.execute = execute;

    function execute(answer, data) {
        var result = true;
        if(answer.data === "invalid format") {
          result = false;
        }
        return ValidatorResponseFactory.create(answer, data, result);
    }

  }

}());
