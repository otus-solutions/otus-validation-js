describe('ValidatorResponseFactory', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            factory = _$injector_.get('ValidatorResponseFactory');
        });
    });

    it('should set correct values in validatorResponse', function() {
        var answer = {
            'data': 'answer'
        };
        var data = {
            'reference': 'data'
        };
        var result = true;

        var validatorResponse = factory.create(answer, data, result);
        expect(validatorResponse.answer).toEqual(answer);
        expect(validatorResponse.data).toEqual(data);
        expect(validatorResponse.result).toEqual(true);
    });

});
