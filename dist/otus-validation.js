(function() {
    'use strict';

    angular.module('otus.validation', []);

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationService', ValidationService);

    ValidationService.$inject = ['ValidationPoolService'];

    function ValidationService(ValidationPoolService) {
        var self = this;
        self.registerElement = registerElement;
        self.unregisterElement = unregisterElement;
        self.validateElement = validateElement;
        self.validateAllElements = validateAllElements;
        self.initPool = initPool;
        self.resetPool = resetPool;

        function initPool() {
            ValidationPoolService.initPool();
        }

        function resetPool() {
            ValidationPoolService.initPool();
        }

        function registerElement(elementRegister) {
            ValidationPoolService.persist(elementRegister);
        }

        function unregisterElement(elementRegister) {
            ValidationPoolService.remove(elementRegister);
        }

        function validateElement(idElementRegister, callback) {
            var response = [];

            var elementRegister = ValidationPoolService.fetch(idElementRegister);
            elementRegister.runAllValidators(function(responseElement) {
                response.push(responseElement);
            });

            callback(response);
        }

        function validateAllElements(callback) {
            var response = [];
            var allElements = ValidationPoolService.fetchAll();

            allElements.forEach(function(element, index, array) {
                element.runAllValidators(function(responseElement) {
                    response.push(responseElement);
                });
            });

            callback(response);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService', 'DistinctValidatorService', 'FutureDateValidatorService',
        'DateInValidatorService', 'LowerLimitValidatorService', 'MaxDateValidatorService', 'MaxLengthValidatorService',
        'MinDateValidatorService', 'MinLengthValidatorService', 'PastDateValidatorService', 'UpperLimitValidatorService',
        'InValidatorService', 'PrecisionValidatorService', 'ScaleValidatorService', 'AlphanumericValidatorService', 'LowerCaseValidatorService',
        'SpecialsValidatorService', 'UpperCaseValidatorService', 'MaxTimeValidatorService', 'MinTimeValidatorService'
    ];

    function ValidationHubService(MandatoryValidatorService, DistinctValidatorService, FutureDateValidatorService,
        DateInValidatorService, LowerLimitValidatorService, MaxDateValidatorService, MaxLengthValidatorService,
        MinDateValidatorService, MinLengthValidatorService, PastDateValidatorService, UpperLimitValidatorService, InValidatorService,
        PrecisionValidatorService, ScaleValidatorService, AlphanumericValidatorService, LowerCaseValidatorService, SpecialsValidatorService,
        UpperCaseValidatorService, MaxTimeValidatorService, MinTimeValidatorService) {

        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService,
            'distinct': DistinctValidatorService,
            'futureDate': FutureDateValidatorService,
            'rangeDate': DateInValidatorService,
            'lowerLimit': LowerLimitValidatorService,
            'maxDate': MaxDateValidatorService,
            'maxLength': MaxLengthValidatorService,
            'minDate': MinDateValidatorService,
            'minLength': MinLengthValidatorService,
            'pastDate': PastDateValidatorService,
            'upperLimit': UpperLimitValidatorService,
            'in': InValidatorService,
            'precision': PrecisionValidatorService,
            'scale': ScaleValidatorService,
            'alphanumeric': AlphanumericValidatorService,
            'lowerCase': LowerCaseValidatorService,
            'specials': SpecialsValidatorService,
            'upperCase': UpperCaseValidatorService,
            'maxTime': MaxTimeValidatorService,
            'minTime': MinTimeValidatorService,
        };
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationPoolService', ValidationPoolService);

    function ValidationPoolService() {
        var self = this;

        self.persist = persist;
        self.remove = remove;
        self.fetch = fetch;
        self.fetchAll = fetchAll;
        self.initPool = initPool;

        initPool();

        function initPool() {
            self.pool = [];
        }

        function persist(elementRegister) {
            self.pool.push(elementRegister);
        }

        function remove(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    self.pool.splice(index, 1);
                }
            });
        }

        function fetch(idElementRegister) {
            var founded = {};

            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    founded = element;
                }
            });

            return founded;
        }

        function fetchAll() {
            return self.pool;
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ElementRegisterFactory', ElementRegisterFactory);

    ElementRegisterFactory.$inject = ['ValidatorFactory', 'ValidationResponseFactory'];

    function ElementRegisterFactory(ValidatorFactory, ValidationResponseFactory) {
        var self = this;
        self.create = create;

        function create(id, answer) {
            return new ElementRegister(id, answer, ValidatorFactory, ValidationResponseFactory);
        }

        return self;
    }

    function ElementRegister(id, answer, ValidatorFactory, ValidationResponseFactory) {
        var self = this;
        self.id = id;
        self.answer = answer;
        self.validators = [];
        self.addValidator = addValidator;
        self.runAllValidators = runAllValidators;

        function addValidator(name, data) {
            var validator = ValidatorFactory.create(name, data, self.answer);
            self.validators.push(validator);
        }

        function runAllValidators(callback) {
            var validationResponse = ValidationResponseFactory.create(self.id);
            self.validators.forEach(function(element, index, array) {
                validationResponse.addValidatorResponse(element.execute());
            });

            callback(validationResponse);
        }
    }

}());

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
                validationResponse.name = self.name;

                return validationResponse;
            }
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DateInValidatorService', DateInValidatorService);

    DateInValidatorService.$inject = ['ValidatorResponseFactory'];

    function DateInValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {

            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }

            var formatedAnswer = new Date(answer.data).setHours(0, 0, 0, 0);
            var initialDate = new Date(data.initial).setHours(0, 0, 0, 0);
            var endDate = new Date(data.end).setHours(0, 0, 0, 0);
            var result = (endDate >= formatedAnswer && formatedAnswer >= initialDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('FutureDateValidatorService', FutureDateValidatorService);

    FutureDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function FutureDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {

            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }

            var result;
            if (data.reference === true) {
                var formatedAnswer = new Date(answer.data).setHours(0, 0, 0, 0);
                var todayDate = new Date().setHours(0, 0, 0, 0);
                result = (formatedAnswer >= todayDate);
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxDateValidatorService', MaxDateValidatorService);

    MaxDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {

            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }

            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setHours(0, 0, 0, 0);
            var maxDate = new Date(data.reference);
            maxDate.setHours(0, 0, 0, 0);
            var result = (formatedAnswer <= maxDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinDateValidatorService', MinDateValidatorService);

    MinDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setHours(0, 0, 0, 0);
            var minDate = new Date(data.reference);
            minDate.setHours(0, 0, 0, 0);
            var result = (formatedAnswer >= minDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PastDateValidatorService', PastDateValidatorService);

    PastDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function PastDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;
            if (data.reference === true) {
                var formatedAnswer = new Date(answer.data).setHours(0, 0, 0, 0);
                var todayDate = new Date().setHours(0, 0, 0, 0);
                result = (formatedAnswer < todayDate);
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DistinctValidatorService', DistinctValidatorService);

    DistinctValidatorService.$inject = ['ValidatorResponseFactory'];

    function DistinctValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = (answer.data != data.reference);
            return ValidatorResponseFactory.create(answer, data, result);

        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    MandatoryValidatorService.$inject = ['ValidatorResponseFactory'];

    function MandatoryValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var result = (angular.equals(answer.data, {})) ? false : true;
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('InValidatorService', InValidatorService);

    InValidatorService.$inject = ['ValidatorResponseFactory'];

    function InValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = (data.initial <= answer.data && answer.data <= data.end);
            return ValidatorResponseFactory.create(answer, data, result);

        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerLimitValidatorService', LowerLimitValidatorService);

    LowerLimitValidatorService.$inject = ['ValidatorResponseFactory'];

    function LowerLimitValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {

            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = (answer.data >= data.reference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PrecisionValidatorService', PrecisionValidatorService);

    PrecisionValidatorService.$inject = ['ValidatorResponseFactory'];

    function PrecisionValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === answer.data.toString().length) {
                result = true;
            } else {
                result = false;
            }
            return ValidatorResponseFactory.create(answer, data, result);

        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ScaleValidatorService', ScaleValidatorService);

    ScaleValidatorService.$inject = ['ValidatorResponseFactory'];

    function ScaleValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;
            var splitedAnswer = (answer.data.toString().split('.'));
            if (splitedAnswer[1]) {
                result = (data.reference === splitedAnswer[1].length);
            } else {
                result = false;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }
}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperLimitValidatorService', UpperLimitValidatorService);

    UpperLimitValidatorService.$inject = ['ValidatorResponseFactory'];

    function UpperLimitValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }

            var result = (answer.data <= data.reference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

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
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === true) {
                result = ValidatorResponseFactory.isValidAlphanumeric(model);
            } else {
                result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
        }
    }
}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerCaseValidatorService', LowerCaseValidatorService);

    LowerCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function LowerCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference) {
                result = answer.data.toString().toLowerCase();
            } else {
                result = answer.data.toString();
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxLengthValidatorService', MaxLengthValidatorService);

    MaxLengthValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxLengthValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = (answer.data.length <= data.size);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinLengthValidatorService', MinLengthValidatorService);

    MinLengthValidatorService.$inject = ['ValidatorResponseFactory'];

    function MinLengthValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result = (answer.data.length >= data.size);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('SpecialsValidatorService', SpecialsValidatorService);

    SpecialsValidatorService.$inject = ['ValidatorResponseFactory'];

    function SpecialsValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === true) {
                result = ValidatorResponseFactory.isValidSpecials(answer);
            } else {
                result = true;
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }
}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperCaseValidatorService', UpperCaseValidatorService);

    UpperCaseValidatorService.$inject = ['ValidatorResponseFactory'];

    function UpperCaseValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var result;

            if (data.reference === true) {
                result = answer.data.toString().toUpperCase();
            } else {
                result = answer.data.toString();
            }
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxTimeValidatorService', MaxTimeValidatorService);

    MaxTimeValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxTimeValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            if (angular.equals(answer.data, {})) {
                return ValidatorResponseFactory.create(answer, data, true);
            }
            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setDate(1);
            formatedAnswer.setMonth(0);
            formatedAnswer.setFullYear(1970);
            var formatedReference = new Date(data.reference);
            formatedReference.setDate(1);
            formatedReference.setMonth(0);
            formatedReference.setFullYear(1970);
            var result = (formatedAnswer <= formatedReference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

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
            var formatedAnswer = new Date(answer.data);
            formatedAnswer.setDate(1);
            formatedAnswer.setMonth(0);
            formatedAnswer.setFullYear(1970);
            var formatedReference = new Date(data.reference);
            formatedReference.setDate(1);
            formatedReference.setMonth(0);
            formatedReference.setFullYear(1970);
            var result = (formatedAnswer >= formatedReference);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());

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
