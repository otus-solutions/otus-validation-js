!function(){"use strict";angular.module("otus.validation",[])}(),function(){"use strict";function ValidationService(ValidationPoolService){function initPool(){ValidationPoolService.initPool()}function resetPool(){ValidationPoolService.initPool()}function registerElement(elementRegister){ValidationPoolService.persist(elementRegister)}function unregisterElement(elementRegister){ValidationPoolService.remove(elementRegister)}function validateElement(){}function validateAllElements(){}var self=this;self.registerElement=registerElement,self.unregisterElement=unregisterElement,self.validateElement=validateElement,self.validateAllElements=validateAllElements,self.initPool=initPool,self.resetPool=resetPool}angular.module("otus.validation").service("ValidationService",ValidationService),ValidationService.$inject=["ValidationPoolService"]}(),function(){"use strict";function ValidationHubService(MandatoryValidatorService){var self=this;self.validators={mandatory:MandatoryValidatorService}}angular.module("otus.validation").service("ValidationHubService",ValidationHubService),ValidationHubService.$inject=["MandatoryValidatorService"]}(),function(){"use strict";function ValidationPoolService(){function initPool(){self.pool=[]}function persist(elementRegister){console.log("Elemento registrado no pool"),console.dir(self.pool),self.pool.push(elementRegister)}function remove(idElementRegister){self.pool.forEach(function(element,index,array){element.id===idElementRegister&&self.pool.remove(index)})}function fetch(idElementRegister){self.pool.forEach(function(element,index,array){return element.id===idElementRegister?element:void 0})}var self=this;self.persist=persist,self.remove=remove,self.fetch=fetch,self.initPool=initPool,initPool()}angular.module("otus.validation").service("ValidationPoolService",ValidationPoolService)}(),function(){"use strict";function MandatoryValidatorService(){function execute(model,data){return console.log("EXECUTE"),console.log(model),console.log(data),!1}var self=this;self.execute=execute}angular.module("otus.validation").service("MandatoryValidatorService",MandatoryValidatorService)}(),function(){"use strict";function ElementRegisterFactory(ValidatorFactory){function create(id,model){return new ElementRegister(id,model,ValidatorFactory)}var self=this;return self.create=create,self}function ElementRegister(id,model,ValidatorFactory){function addValidator(name,data){var validator=ValidatorFactory.create(name,data,self.model);self.validators.push(validator)}var self=this;self.id=id,self.model=model,self.validators=[],self.addValidator=addValidator}angular.module("otus.validation").factory("ElementRegisterFactory",ElementRegisterFactory),ElementRegisterFactory.$inject=["ValidatorFactory"]}(),function(){"use strict";function ValidatorFactory(ValidationHubService){function create(name,data,model){return new Validator(name,data,model,ValidationHubService)}var self=this;return self.create=create,self}function Validator(name,data,model,ValidationHubService){function execute(){self.status&&ValidationHubService.validators[name].execute(model,data)}var self=this;self.name=name,self.status=!0,self.data=data,self.execute=execute}angular.module("otus.validation").factory("ValidatorFactory",ValidatorFactory),ValidatorFactory.$inject=["ValidationHubService"]}();