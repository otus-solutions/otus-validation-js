describe('MinDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MinDateValidatorService');
        });
    });

    it('should return false response when is less than reference', function() {
        var model = new Date(2015, 1, 1);
        var data = {
            'reference': new Date(2016, 1, 1)
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(false);
    });

    it('should return true response when is greater than reference', function() {
        var model = new Date(2016, 2, 1);
        var data = {
            'reference': new Date(2016, 1, 1)
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(true);
    });

});
