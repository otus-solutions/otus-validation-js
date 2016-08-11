describe('ScaleValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('ScaleValidatorService');
        });
    });

    it('should be return length to reference', function() {
        //scale deve ler os números a partir da virgula
        var model = 2;
        var data = {
            'reference': 123.56
        }

        var response = service.execute(model, data);
        expect(response).toBe(true);
    });

});
