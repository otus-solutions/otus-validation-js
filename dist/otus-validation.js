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
            'future-date': FutureDateValidatorService,
            'date-in': DateInValidatorService,
            'lower-limit': LowerLimitValidatorService,
            'max-date': MaxDateValidatorService,
            'max-length': MaxLengthValidatorService,
            'min-date': MinDateValidatorService,
            'min-length': MinLengthValidatorService,
            'past-date': PastDateValidatorService,
            'upper-limit': UpperLimitValidatorService,
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

        function create(id, model) {
            return new ElementRegister(id, model, ValidatorFactory, ValidationResponseFactory);
        }

        return self;
    }

    function ElementRegister(id, model, ValidatorFactory, ValidationResponseFactory) {
        var self = this;
        self.id = id;
        self.model = model;
        self.validators = [];
        self.addValidator = addValidator;
        self.runAllValidators = runAllValidators;

        function addValidator(name, data) {
            var validator = ValidatorFactory.create(name, data, self.model);
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

        function create(name, data, model) {
            return new Validator(name, data, model, ValidationHubService);
        }

        return self;
    }

    function Validator(name, data, model, ValidationHubService) {
        var self = this;
        self.name = name;
        self.enable = true;
        self.data = data;
        self.execute = execute;

        function execute() {
            if (self.enable) {
                var validationResponse = ValidationHubService.validators[self.name].execute(model, self.data);
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

        function execute(model, data) {
            var result = (data.initial < model && model < data.end);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model > new Date());
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model <= data.reference);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model >= data.reference);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model < new Date());
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model != data.reference);
            return ValidatorResponseFactory.create(model, data, result);

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

        function execute(model, data) {
            var result = !(typeof model == 'undefined' || model.length == 0);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (data.initial < model && model < data.end);
            return ValidatorResponseFactory.create(model, data, result);

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

        function execute(model, data) {
            var result = (model > data.reference);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = data.reference.toString();
            
            if (result.length === model) {
                return true;
            } else {
                return false;
            }
            return ValidatorResponseFactory.create(model, data, result);

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

        function execute(model, data) {
            var result = data.reference.toString();
            var comma = result.split('.');

            if (comma[1].length === model) {
                return true;
            } else {
                return false;
            }

            return ValidatorResponseFactory.create(model, data, result);

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

        function execute(model, data) {
            var result = (model < data.reference);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model <= data.reference);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model >= data.reference);
            return ValidatorResponseFactory.create(model, data, result);
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
            var result;

            if (data.reference == true) {
                return result = ValidatorResponseFactory.isValidAlphanumeric(model);
            } else {
                return result = model.toString();
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

        function execute(model, data) {
            var result;

            if(data.reference == true) {
                return result = model.toLowerCase();
            } else {
                return result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model.length <= data.size);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result = (model.length >= data.size);
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result;

            if (data.reference == true) {
                return result = ValidatorResponseFactory.isValidSpecials(model);
            } else {
                return result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
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

        function execute(model, data) {
            var result;

            if (data.reference == true) {
                return result = model.toUpperCase();
            } else {
                return result = model.toString();
            }
            return ValidatorResponseFactory.create(model, data, result);
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
