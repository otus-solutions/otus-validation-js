(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    function MandatoryValidatorService() {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            console.log('EXECUTE');
            console.log(model);
            console.log(data);
            return false;
        }
    }

}());
