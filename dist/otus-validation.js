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

        // TODO Registra um elemento que sera validado
        // quando invocado 
        function registerElement(elementRegister) {
            ValidationPoolService.persist(elementRegister);
        }

        // TODO Remove do Pool de Elementos registrados
        // um determinado elemento
        function unregisterElement(elementRegister) {
            ValidationPoolService.remove(elementRegister);
        }

        // TODO Invova os validadores de um determinado
        // elemento previamente registrado
        function validateElement() {

        }

        // TODO Invova os validadores de todos
        // elementos previamente registrados
        function validateAllElements() {
            var allElements = ValidationPoolService.fetchAll();

            allElements.forEach(function(element, index, array) {
                element.runAllValidators();
            });
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
        'MaxTimeValidatorService', 'MinDateValidatorService', 'MinLengthValidatorService', 'MinTimeValidatorService',
	'PastDateValidatorService', 'UpperLimitValidatorService'
    ];

    function ValidationHubService(MandatoryValidatorService, DistinctValidatorService, FutureDateValidatorService,
        DateInValidatorService, LowerLimitValidatorService, MaxDateValidatorService, MaxLengthValidatorService,
        MaxTimeValidatorService, MinDateValidatorService, MinLengthValidatorService, MinTimeValidatorService,
	PastDateValidatorService, UpperLimitValidatorService) {

        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService,
            'in': MandatoryValidatorService,
            'distinct': DistinctValidatorService,
            'future-date': FutureDateValidatorService,
            'date-in': DateInValidatorService,
            'lower-limit': LowerLimitValidatorService,
            'max-date': MaxDateValidatorService,
            'max-length': MaxLengthValidatorService,
            'max-time': MaxTimeValidatorService,
            'min-date': MinDateValidatorService,
            'min-length': MinLengthValidatorService,
            'min-time': MinTimeValidatorService,
            'past-date': PastDateValidatorService,
            'upper-limit': UpperLimitValidatorService,

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
                    self.pool.remove(index);
                }
            });
        }

        function fetch(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    return element;
                }
            });
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
        .service('DateInValidatorService', DateInValidatorService);

    DateInValidatorService.$inject = ['ValidationResponseFactory'];

    function DateInValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (data.initial < model && model < data.end);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('DistinctValidatorService', DistinctValidatorService);

    DistinctValidatorService.$inject = ['ValidationResponseFactory'];

    function DistinctValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model != data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('FutureDateValidatorService', FutureDateValidatorService);

    FutureDateValidatorService.$inject = ['ValidationResponseFactory'];

    function FutureDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model > new Date());
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('LowerLimitValidatorService', LowerLimitValidatorService);

    LowerLimitValidatorService.$inject = ['ValidationResponseFactory'];

    function LowerLimitValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model > data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    MandatoryValidatorService.$inject = ['ValidationResponseFactory'];

    function MandatoryValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = !(typeof model == 'undefined' || model.length == 0);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxDateValidatorService', MaxDateValidatorService);

    MaxDateValidatorService.$inject = ['ValidationResponseFactory'];

    function MaxDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model <= data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxLengthValidatorService', MaxLengthValidatorService);

    MaxLengthValidatorService.$inject = ['ValidationResponseFactory'];

    function MaxLengthValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model.length <= data.size);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxTimeValidatorService', MaxTimeValidatorService);

    MaxTimeValidatorService.$inject = ['ValidationResponseFactory'];

    function MaxTimeValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            // TODO Analisar retorno do tipo de componente para comparação 
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinDateValidatorService', MinDateValidatorService);

    MinDateValidatorService.$inject = ['ValidationResponseFactory'];

    function MinDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model >= data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinLengthValidatorService', MinLengthValidatorService);

    MinLengthValidatorService.$inject = ['ValidationResponseFactory'];

    function MinLengthValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model.length >= data.size);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MinTimeValidatorService', MinTimeValidatorService);

    MinTimeValidatorService.$inject = ['ValidationResponseFactory'];

    function MinTimeValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            // TODO Analisar retorno do tipo de componente para comparação 
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('PastDateValidatorService', PastDateValidatorService);

    PastDateValidatorService.$inject = ['ValidationResponseFactory'];

    function PastDateValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model < new Date());
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('UpperLimitValidatorService', UpperLimitValidatorService);

    UpperLimitValidatorService.$inject = ['ValidationResponseFactory'];

    function UpperLimitValidatorService(ValidationResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            var result = (model < data.reference);
            return ValidationResponseFactory.create(model, data, result);
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .factory('ElementRegisterFactory', ElementRegisterFactory);

    ElementRegisterFactory.$inject = ['ValidatorFactory'];

    function ElementRegisterFactory(ValidatorFactory) {
        var self = this;
        self.create = create;

        function create(id, model) {
            return new ElementRegister(id, model, ValidatorFactory);
        }

        return self;
    }

    function ElementRegister(id, model, ValidatorFactory) {
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
            var response = [];

            self.validators.forEach(function(element, index, array) {
                response.push(element.execute());
            });

            callback(response);
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
                var validationResponse = ValidationHubService.validators[self.name].execute(model, self.data);
                validationResponse.name = self.name;

                return validationResponse;
            }
        }
    }

}());
