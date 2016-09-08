(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ValidatorFactory', ValidatorFactory);

    ValidatorFactory.$inject = ['ValidationHubService'];

    function ValidatorFactory(ValidationHubService) {
        var self = this;
        self.create = create;

        function create(name, data, answer) {
            return new Validator(name, data, answer, ValidationHubService);
        }

        return self;
    }

    function Validator(name, data, answer, ValidationHubService) {
        var self = this;
        self.name = name;
        self.enable = true;
        self.data = data;
        self.execute = execute;

        function execute() {
            if (self.enable) {
                var validationResponse = ValidationHubService.validators[self.name].execute(answer, self.data);
                validationResponse = self.name;

                return validationResponse;
            }
        }
    }

}());
