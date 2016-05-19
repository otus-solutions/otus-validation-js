(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ValidationResponseFactory', ValidationResponseFactory);

    function ValidationResponseFactory() {
        var self = this;
        self.create = create;

        function create(reference, data, result) {
            return new ValidationResponse(reference, data, result);
        }

        return self;
    }

    function ValidationResponse(reference, data, result) {
        var self = this;
        self.name = {};
        self.reference = reference;
        self.data = data;
        self.result = result;
    }

}());
