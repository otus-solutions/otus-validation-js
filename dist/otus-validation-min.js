!function(){"use strict";angular.module("otus.validation",[])}(),function(){"use strict";function ValidationService(ValidationPoolService){function initPool(){ValidationPoolService.initPool()}function resetPool(){ValidationPoolService.initPool()}function registerElement(elementRegister){ValidationPoolService.persist(elementRegister)}function unregisterElement(elementRegister){ValidationPoolService.remove(elementRegister)}function validateElement(idElementRegister,callback){var response=[],elementRegister=ValidationPoolService.fetch(idElementRegister);elementRegister.runAllValidators(function(responseElement){response.push(responseElement)}),callback(response)}function validateAllElements(callback){var response=[],allElements=ValidationPoolService.fetchAll();allElements.forEach(function(element,index,array){element.runAllValidators(function(responseElement){response.push(responseElement)})}),callback(response)}var self=this;self.registerElement=registerElement,self.unregisterElement=unregisterElement,self.validateElement=validateElement,self.validateAllElements=validateAllElements,self.initPool=initPool,self.resetPool=resetPool}angular.module("otus.validation").service("ValidationService",ValidationService),ValidationService.$inject=["ValidationPoolService"]}(),function(){"use strict";function ValidationHubService(MandatoryValidatorService,DistinctValidatorService,FutureDateValidatorService,DateInValidatorService,LowerLimitValidatorService,MaxDateValidatorService,MaxLengthValidatorService,MinDateValidatorService,MinLengthValidatorService,PastDateValidatorService,UpperLimitValidatorService,InValidatorService,PrecisionValidatorService,ScaleValidatorService,AlphanumericValidatorService,LowerCaseValidatorService,SpecialsValidatorService,UpperCaseValidatorService,MaxTimeValidatorService,MinTimeValidatorService){var self=this;self.validators={mandatory:MandatoryValidatorService,distinct:DistinctValidatorService,futureDate:FutureDateValidatorService,rangeDate:DateInValidatorService,lowerLimit:LowerLimitValidatorService,maxDate:MaxDateValidatorService,maxLength:MaxLengthValidatorService,minDate:MinDateValidatorService,minLength:MinLengthValidatorService,pastDate:PastDateValidatorService,upperLimit:UpperLimitValidatorService,in:InValidatorService,precision:PrecisionValidatorService,scale:ScaleValidatorService,alphanumeric:AlphanumericValidatorService,lowerCase:LowerCaseValidatorService,specials:SpecialsValidatorService,upperCase:UpperCaseValidatorService,maxTime:MaxTimeValidatorService,minTime:MinTimeValidatorService}}angular.module("otus.validation").service("ValidationHubService",ValidationHubService),ValidationHubService.$inject=["MandatoryValidatorService","DistinctValidatorService","FutureDateValidatorService","DateInValidatorService","LowerLimitValidatorService","MaxDateValidatorService","MaxLengthValidatorService","MinDateValidatorService","MinLengthValidatorService","PastDateValidatorService","UpperLimitValidatorService","InValidatorService","PrecisionValidatorService","ScaleValidatorService","AlphanumericValidatorService","LowerCaseValidatorService","SpecialsValidatorService","UpperCaseValidatorService","MaxTimeValidatorService","MinTimeValidatorService"]}(),function(){"use strict";function ValidationPoolService(){function initPool(){self.pool=[]}function persist(elementRegister){self.pool.push(elementRegister)}function remove(idElementRegister){self.pool.forEach(function(element,index,array){element.id===idElementRegister&&self.pool.splice(index,1)})}function fetch(idElementRegister){var founded={};return self.pool.forEach(function(element,index,array){element.id===idElementRegister&&(founded=element)}),founded}function fetchAll(){return self.pool}var self=this;self.persist=persist,self.remove=remove,self.fetch=fetch,self.fetchAll=fetchAll,self.initPool=initPool,initPool()}angular.module("otus.validation").service("ValidationPoolService",ValidationPoolService)}(),function(){"use strict";function ElementRegisterFactory(ValidatorFactory,ValidationResponseFactory){function create(id,model){return new ElementRegister(id,model,ValidatorFactory,ValidationResponseFactory)}var self=this;return self.create=create,self}function ElementRegister(id,model,ValidatorFactory,ValidationResponseFactory){function addValidator(name,data){var validator=ValidatorFactory.create(name,data,self.model);self.validators.push(validator)}function runAllValidators(callback){var validationResponse=ValidationResponseFactory.create(self.id);self.validators.forEach(function(element,index,array){validationResponse.addValidatorResponse(element.execute())}),callback(validationResponse)}var self=this;self.id=id,self.model=model,self.validators=[],self.addValidator=addValidator,self.runAllValidators=runAllValidators}angular.module("otus.validation").factory("ElementRegisterFactory",ElementRegisterFactory),ElementRegisterFactory.$inject=["ValidatorFactory","ValidationResponseFactory"]}(),function(){"use strict";function ValidatorFactory(ValidationHubService){function create(name,data,answer){return new Validator(name,data,answer,ValidationHubService)}var self=this;return self.create=create,self}function Validator(name,data,answer,ValidationHubService){function execute(){if(self.enable){var validationResponse=ValidationHubService.validators[self.name].execute(answer,self.data);return validationResponse.name=self.name,validationResponse}}var self=this;self.name=name,self.enable=!0,self.data=data,self.execute=execute}angular.module("otus.validation").factory("ValidatorFactory",ValidatorFactory),ValidatorFactory.$inject=["ValidationHubService"]}(),function(){"use strict";function DateInValidatorService(ValidatorResponseFactory){function execute(answer,reference){var formatedAnswer=new Date(answer.data).toLocaleDateString(),result=new Date(reference.initial).toLocaleDateString()<formatedAnswer&&formatedAnswer<new Date(reference.end).toLocaleDateString();return ValidatorResponseFactory.create(answer,reference,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("DateInValidatorService",DateInValidatorService),DateInValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function FutureDateValidatorService(ValidatorResponseFactory){function execute(model,data){var result;if(data.reference===!0)return result=model>new Date,ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("FutureDateValidatorService",FutureDateValidatorService),FutureDateValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MaxDateValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model<=new Date(data.reference);return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MaxDateValidatorService",MaxDateValidatorService),MaxDateValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MinDateValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model>=data.reference;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MinDateValidatorService",MinDateValidatorService),MinDateValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function PastDateValidatorService(ValidatorResponseFactory){function execute(model,data){if(1==data.reference){var result=model<new Date;return ValidatorResponseFactory.create(model,data,result)}}var self=this;self.execute=execute}angular.module("otus.validation").service("PastDateValidatorService",PastDateValidatorService),PastDateValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function DistinctValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model!=data.reference;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("DistinctValidatorService",DistinctValidatorService),DistinctValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MandatoryValidatorService(ValidatorResponseFactory){function execute(answer,data){console.log("mandatory"),console.log(answer);var result=!!angular.equals({},answer);return ValidatorResponseFactory.create(answer,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MandatoryValidatorService",MandatoryValidatorService),MandatoryValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function InValidatorService(ValidatorResponseFactory){function execute(model,data){var result=data.initial<model&&model<data.end;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("InValidatorService",InValidatorService),InValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function LowerLimitValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model>data.reference;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("LowerLimitValidatorService",LowerLimitValidatorService),LowerLimitValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function PrecisionValidatorService(ValidatorResponseFactory){function execute(model,data){var result=data.reference.toString();return result=result.length===model,ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("PrecisionValidatorService",PrecisionValidatorService),PrecisionValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function ScaleValidatorService(ValidatorResponseFactory){function execute(model,data){var result=data.reference.toString(),comma=result.split(".");return result=!(!comma[1]||comma[1].length!==model),ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("ScaleValidatorService",ScaleValidatorService),ScaleValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function UpperLimitValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model<data.reference;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("UpperLimitValidatorService",UpperLimitValidatorService),UpperLimitValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function AlphanumericValidatorService(ValidatorResponseFactory){function execute(model,data){var result;return result=data.reference===!0?ValidatorResponseFactory.isValidAlphanumeric(model):model.toString(),ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("AlphanumericValidatorService",AlphanumericValidatorService),AlphanumericValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function LowerCaseValidatorService(ValidatorResponseFactory){function execute(model,data){var result;return result=data.reference?model.toString().toLowerCase():model.toString(),ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("LowerCaseValidatorService",LowerCaseValidatorService),LowerCaseValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MaxLengthValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model.length<=data.size;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MaxLengthValidatorService",MaxLengthValidatorService),MaxLengthValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MinLengthValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model.length>=data.size;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MinLengthValidatorService",MinLengthValidatorService),MinLengthValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function SpecialsValidatorService(ValidatorResponseFactory){function execute(model,data){var result;return result=1==data.reference?ValidatorResponseFactory.isValidSpecials(model):model.toString(),ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("SpecialsValidatorService",SpecialsValidatorService),SpecialsValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function UpperCaseValidatorService(ValidatorResponseFactory){function execute(model,data){var result;return result=1==data.reference?model.toString().toUpperCase():model.toString(),ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("UpperCaseValidatorService",UpperCaseValidatorService),UpperCaseValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MaxTimeValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model<=data.reference;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MaxTimeValidatorService",MaxTimeValidatorService),MaxTimeValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function MinTimeValidatorService(ValidatorResponseFactory){function execute(model,data){var result=model>=data.reference;return ValidatorResponseFactory.create(model,data,result)}var self=this;self.execute=execute}angular.module("otus.validation").service("MinTimeValidatorService",MinTimeValidatorService),MinTimeValidatorService.$inject=["ValidatorResponseFactory"]}(),function(){"use strict";function ValidationResponseFactory(){function create(elementID){return new ValidationResponse(elementID)}var self=this;return self.create=create,self}function ValidationResponse(elementID){function addValidatorResponse(reponse){self.validatorsResponse.push(reponse)}var self=this;self.elementID=elementID,self.validatorsResponse=[],self.addValidatorResponse=addValidatorResponse}angular.module("otus.validation").factory("ValidationResponseFactory",ValidationResponseFactory)}(),function(){"use strict";function ValidatorResponseFactory(){function create(answer,data,result){return new ValidatorResponse(answer,data,result)}var self=this;return self.create=create,self.isValidSpecials=isValidSpecials,self.isValidAlphanumeric=isValidAlphanumeric,self}function ValidatorResponse(answer,data,result){var self=this;self.name={},self.answer=answer,self.data=data,self.result=result}function isValidAlphanumeric(str){return!/[^a-zA-Z0-9 ]/g.test(str)}function isValidSpecials(str){return!/[^@!#$%¨&*+=()_}{^`´ ]/g.test(str)}angular.module("otus.validation").factory("ValidatorResponseFactory",ValidatorResponseFactory)}();