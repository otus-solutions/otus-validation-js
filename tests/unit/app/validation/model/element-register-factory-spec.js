describe('ElementRegisterFactory', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            factory = _$injector_.get('ElementRegisterFactory');
        });
    });

    it('should set corrects values when call create', function() {
        var elementID = 'ID';
        var elementModel = {};

        var elementRegister = factory.create(elementID, elementModel);
        expect(elementRegister.id).toEqual(elementID);
        expect(elementRegister.model).toEqual(elementModel);
    });

    it('should create Validator when call addValidator', function() {
        var elementID = 'ID';
        var elementModel = {};
        var validatorName = 'Validator';
        var validatorData = {};

        var elementRegister = factory.create(elementID, elementModel);
        elementRegister.addValidator(validatorName, validatorData);

        expect(elementRegister.validators[0].name).toEqual(validatorName);
        expect(elementRegister.validators[0].data).toEqual(validatorData);
    });

    it('should run validators when call runAllValidators', function() {
        var elementID = 'ID';
        var elementModel = {};
        var validatorName = 'mandatory';
        var validatorData = {};

        var elementRegister = factory.create(elementID, elementModel);
        elementRegister.addValidator(validatorName, validatorData);
        elementRegister.addValidator(validatorName, validatorData);

        spyOn(elementRegister.validators[0], 'execute');
        spyOn(elementRegister.validators[1], 'execute');

        elementRegister.runAllValidators(function(response) {});

        expect(elementRegister.validators[0].execute).toHaveBeenCalled();
        expect(elementRegister.validators[1].execute).toHaveBeenCalled();
    });
});
