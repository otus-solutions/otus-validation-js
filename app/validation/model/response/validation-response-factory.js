(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ValidationResponseFactory', ValidationResponseFactory);

    function ValidationResponseFactory() {
        var self = this;
        self.create = create;

        function create(elementID) {
            return new ValidationResponse(elementID);
        }

        return self;
    }

    function ValidationResponse(elementID) {
        var self = this;
        self.elementID = elementID;
        self.validatorsResponse = [];
        self.addValidatorResponse = addValidatorResponse;

        function addValidatorResponse(reponse) {
            self.validatorsResponse.push(reponse);
        }
    }

}());
