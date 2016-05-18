(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ValidatorFactory', ValidatorFactory);

    ValidatorFactory.$inject = ['ValidationHubService'];

    function ValidatorFactory(ValidationHubService) {
        var self = this;
        self.create = create;

        function create(name, data, model) {
            return new Validator(name, data, model, ValidationHubService);
        }

        return self;
    }

    function Validator(name, data, model, ValidationHubService) {
        var self = this;
        self.name = name;
        self.status = true;
        self.data = data;
        self.execute = execute;

        function execute() {
            if (self.status) {
                ValidationHubService.validators[name].execute(model, data);
            }
        }
    }

}());
