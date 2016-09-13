describe('ScaleValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('ScaleValidatorService');
        });
    });

    it('should return true if decimal length equals to reference', function() {
        //scale deve ler os números a partir da virgula
        var answer = {'data': 123.02};
        var data = {
            'reference': 2
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    it('should return true if decimal length is not equal to reference', function() {
        var answer = {'data': 123.0};
        var data = {
            'reference': 2
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(false);
    });

});
