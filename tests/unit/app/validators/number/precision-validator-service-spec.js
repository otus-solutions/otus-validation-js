describe('PrecisionValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('PrecisionValidatorService');
        });
    });

    it('should be return true if precision number is valid', function() {
        //quantidade total de digitos do número.
        var model = 5;
        var data = {
            'reference': 12356
        }

        var response = service.execute(model, data);
        expect(response).toBe(true);
    });

});
