describe('UpperLimitValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('UpperLimitValidatorService');
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

    it('should return true response when answer value is below the reference', function() {
        var answer = {'data': 1};
        var data = {
            'reference': 10
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response when is above the reference', function() {
        var answer = {'data': 10};
        var data = {
            'reference': 1
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should return true response when is equal to reference', function() {
        var answer = {'data': 10};
        var data = {
            'reference': 10
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

});
