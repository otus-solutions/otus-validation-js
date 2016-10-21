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

        function _compareTime(answer, reference) {
            var formatedAnswer = String(answer).match(/([01]\d|2[0-3]):([0-5]\d):([0-5]\d)/);
            var formatedReference = String(reference).match(/([01]\d|2[0-3]):([0-5]\d):([0-5]\d)/);
            var date = new Date();
            var dateAnswer = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(formatedAnswer[1]), Number(formatedAnswer[2]), Number(formatedAnswer[3]));
            var dateReference = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(formatedReference[1]), Number(formatedReference[2]), Number(formatedReference[3]));
            return dateAnswer >= dateReference;
        }
    }

}());
