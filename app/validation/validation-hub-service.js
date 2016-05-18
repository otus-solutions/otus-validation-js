(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService'];

    function ValidationHubService(MandatoryValidatorService) {
        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService
        };
    }

}());
