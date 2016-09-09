describe('ValidatorResponseFactory', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            factory = _$injector_.get('ValidatorResponseFactory');
        });
    });

    it('should set correct values in validatorResponse', function() {
        var model = {
            'model': 'model'
        };
        var data = {
            'data': 'data'
        };
        var result = {
            'result': 'result'
        };

        var validatorResponse = factory.create(model, data, result);
        expect(validatorResponse.answer).toEqual(model);
        expect(validatorResponse.data).toEqual(data);
        expect(validatorResponse.result).toEqual(result);
    });

});
