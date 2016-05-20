describe('ValidatorFactory', function() {
    var mocks = {};

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            factory = _$injector_.get('ValidatorFactory', {
                'ValidationHubService': mock(_$injector_, 'ValidationHubService')
            });
        });
    });

    it('should use correct validator when call execute', function() {
        var validatorName = 'mandatory';
        var validatorData = {};
        var validatorModel = '';

        var validator = factory.create(validatorName, validatorData, validatorModel);
        var result = validator.execute();
        expect(result.name).toEqual(validatorName);
    });

    function mock(_$injector_, name) {
        mocks[name] = _$injector_.get(name);
        return mocks[name];
    }

});
