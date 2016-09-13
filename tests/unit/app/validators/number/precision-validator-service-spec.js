describe('PrecisionValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('PrecisionValidatorService');
        });
    });

    it('should return true when answer is not given', function() {
        var answer = {
            'data': {}
        }; 
        var data = {
            'reference': {}
        };
        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should be return true if quantity of numbers is equal to reference', function() {
        //quantidade total de digitos do número.
        var answer = {
            'data': 12345
        };
        var data = {
            'reference': 5
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    it('should be return false if quantity of numbers is not equal to reference', function() {
        //quantidade total de digitos do número.
        var answer = {
            'data': 4
        };
        var data = {
            'reference': 12356
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(false);
    });

});
