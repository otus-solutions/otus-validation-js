describe('MaxLengthValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MaxLengthValidatorService');
        });
    });

    it('should return true response when size is less than reference', function() {
        var model = 'Diogo';
        var data = {
            'size': 100
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response when size is greater than reference', function() {
        var model = 'Diogo';
        var data = {
            'size': 1
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(false);
    });

});
