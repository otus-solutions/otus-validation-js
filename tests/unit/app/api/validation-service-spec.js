describe('ValidationService', function() {
    var mocks = {};

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('ValidationService', {
                'ValidationPoolService': mock(_$injector_, 'ValidationPoolService')
            });
            ElementRegisterFactory = _$injector_.get('ElementRegisterFactory');
        });
    });

    it('should init pool when call initPool', function() {
        spyOn(mocks.ValidationPoolService, 'initPool');

        service.initPool();
        expect(mocks.ValidationPoolService.initPool).toHaveBeenCalled();
    });

    it('should init pool when call resetPool', function() {
        spyOn(mocks.ValidationPoolService, 'initPool');

        service.resetPool();
        expect(mocks.ValidationPoolService.initPool).toHaveBeenCalled();
    });

    it('should add new elementRegister when call registerElement', function() {
        var elementRegister = {};
        spyOn(mocks.ValidationPoolService, 'persist');

        service.registerElement(elementRegister);
        expect(mocks.ValidationPoolService.persist).toHaveBeenCalledWith(elementRegister);
    });

    it('should remove elementRegister when call unregisterElement', function() {
        var elementRegister = {};
        spyOn(mocks.ValidationPoolService, 'remove');

        service.unregisterElement(elementRegister);
        expect(mocks.ValidationPoolService.remove).toHaveBeenCalledWith(elementRegister);
    });

    it('should fetch element by id when call validateElement', function() {
        var elementRegister = {
            'id': 'ID',
            'runAllValidators': function() {}
        };

        spyOn(mocks.ValidationPoolService, 'fetch').and.callFake(function() {
            return elementRegister;
        });

        service.validateElement(elementRegister.id, function() {});
        expect(mocks.ValidationPoolService.fetch).toHaveBeenCalledWith(elementRegister.id);
    });

    it('should run all validation when call validateElement', function() {
        var elementRegister = {
            'id': 'ID',
            'runAllValidators': function() {}
        };

        spyOn(mocks.ValidationPoolService, 'fetch').and.callFake(function() {
            return elementRegister;
        });
        spyOn(elementRegister, 'runAllValidators');

        service.validateElement(elementRegister.id, function() {});
        expect(mocks.ValidationPoolService.fetch).toHaveBeenCalledWith(elementRegister.id);
        expect(elementRegister.runAllValidators).toHaveBeenCalled();
    });

    it('should return response when call validateElement', function() {
        var elementID = 'ID';
        var model = 5;
        var elementRegister = ElementRegisterFactory.create(elementID, model);
        elementRegister.addValidator('upper-limit', {
            'reference': 10
        });

        service.registerElement(elementRegister);

        service.validateElement(elementID, function(responseValidation) {
            expect(responseValidation[0].elementID).toEqual(elementID);
            expect(responseValidation[0].validatorsResponse[0].name).toEqual('upper-limit');
            expect(responseValidation[0].validatorsResponse[0].data.reference).toEqual(10);
            expect(responseValidation.length).toEqual(1);
        });
    });

    it('should return return all responses when call validateAllElements', function() {
        var elementID = 'ID';
        var elementIDTwo = 'ID2';
        var model = 5;

        var elementRegister = ElementRegisterFactory.create(elementID, model);
        elementRegister.addValidator('upper-limit', {
            'reference': 10
        });

        var elementRegisterTwo = ElementRegisterFactory.create(elementIDTwo, model);
        elementRegisterTwo.addValidator('mandatory', {
            'reference': 10
        });

        service.registerElement(elementRegister);
        service.registerElement(elementRegisterTwo);

        service.validateAllElements(function(responseValidation) {
            expect(responseValidation[0].elementID).toEqual(elementID);
            expect(responseValidation[0].validatorsResponse[0].name).toEqual('upper-limit');
            expect(responseValidation[0].validatorsResponse[0].data.reference).toEqual(10);

            expect(responseValidation[1].elementID).toEqual(elementIDTwo);
            expect(responseValidation[1].validatorsResponse[0].name).toEqual('mandatory');
            expect(responseValidation[1].validatorsResponse[0].data.reference).toEqual(10);

            expect(responseValidation.length).toEqual(2);
        });
    });

    function mock(_$injector_, name) {
        mocks[name] = _$injector_.get(name);
        return mocks[name];
    }

});
