(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('AlphanumericValidatorService', AlphanumericValidatorService);

    AlphanumericValidatorService.$inject = ['ValidatorResponseFactory'];

    function AlphanumericValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
          var code, i, len;
          //Indica que permite caracteres alfanuméricos.
          //switch
            for(i = 0, len = str.length; i < len; i++) {
                code = str.charCodeAt(i);
                if(!(code > 47 && code < 58) && //numeric (0-9)
                  !(code > 64 && code < 91) && //upper alpha (A-Z)
                  !(code > 96 && code < 123)) { //lower alpha (a-z)
                    return false;
                }
              return true;
            };

            return ValidatorResponseFactory.create(model, data, result);
        }
    }
    
}());
