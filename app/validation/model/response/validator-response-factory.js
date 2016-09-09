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

        function create(answer, data, result) {
            return new ValidatorResponse(answer, data, result);
        }

        return self;
    }

    function ValidatorResponse(answer, data, result) {
        var self = this;
        self.name = {};
        self.data = data;
        self.answer = answer;
        self.result = result;
    }

    function isValidAlphanumeric(str) {
        return !/[^a-zA-Z0-9 ]/g.test(str);
    }

    function isValidSpecials(str) {
        return !/[^@!#$%¨&*+=()_}{^`´ ]/g.test(str);

    }

}());
