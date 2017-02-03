(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinTimeValidatorService', MinTimeValidatorService);

    MinTimeValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinTimeValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = _compareTime(answer.data, data.reference);
            return ValidatorResponseFactory.create(answer, data, result);
        }

        /**
        *
        * TODO When the param reference be standardized on Studio(Time validator)
        * the setters below won't be necessary.
        if
          reference is miliseconds - remove dateReference and getTime
        else
          remove dateReference and keep dateTime
        */
        function _compareTime(answer, reference) {
            var dateReference = new Date(reference);

            dateReference.setDate(1);
            dateReference.setMonth(0);
            dateReference.setFullYear(1970);

            return answer >= dateReference.getTime();
        }
    }

}());
