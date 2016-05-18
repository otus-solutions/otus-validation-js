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

        }

    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService'];

    function ValidationHubService(MandatoryValidatorService) {
        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService
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
        self.initPool = initPool;

        initPool();

        function initPool() {
            self.pool = [];
        }

        // TODO Salva Elemento no Pool de Elementos
        function persist(elementRegister) {
            console.log('Elemento registrado no pool');
            console.dir(self.pool);
            self.pool.push(elementRegister);
        }

        // TODO Remove Elemento do Pool de Elementos
        function remove(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    self.pool.remove(index);
                }
            });
        }

        // TODO Busca Elemento no pool utilizando ID
        function fetch(idElementRegister) {
            self.pool.forEach(function(element, index, array) {
                if (element.id === idElementRegister) {
                    return element;
                }
            });
        }
    }

}());

(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MandatoryValidatorService', MandatoryValidatorService);

    function MandatoryValidatorService() {
        var self = this;
        self.execute = execute;

        function execute(model, data) {
            console.log('EXECUTE');
            console.log(model);
            console.log(data);
            return false;
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

        function addValidator(name, data) {
            var validator = ValidatorFactory.create(name, data, self.model);
            self.validators.push(validator);
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
