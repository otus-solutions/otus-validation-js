describe('LowerLimitValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('LowerLimitValidatorService');
        });
    });

    it('should return true response when is greater than reference', function() {
        var model = 10;
        var data = {
            'reference': 1
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response when is lower than reference', function() {
        var model = 1;
        var data = {
            'reference': 10
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(false);
    });

});
