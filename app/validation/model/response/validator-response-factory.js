(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ValidatorResponseFactory', ValidatorResponseFactory);

    function ValidatorResponseFactory() {
        var self = this;
        self.create = create;
        self.isValidSpecials = isValidSpecials;
        self.isValidAlphanumeric = isValidAlphanumeric;

        function create(reference, data, result) {
            return new ValidatorResponse(reference, data, result);
        }

        return self;
    }

    function ValidatorResponse(reference, data, result) {
        var self = this;
        self.name = {};
        self.reference = reference;
        self.data = data;
        self.result = result;
    }

    function isValidAlphanumeric(str) {
        return !/[^a-zA-Z0-9 ]/g.test(str);
    }

    function isValidSpecials(str) {
        return !/[^@!#$%¨&*+=()_}{^`´ ]/g.test(str);

    }

}());
