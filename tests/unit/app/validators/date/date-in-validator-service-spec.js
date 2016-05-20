describe('DateInValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('DateInValidatorService');
        });
    });

    it('should return true response value in range', function() {
        var model = new Date(2016, 1, 20);
        var data = {
            'initial': new Date(2016, 1, 1),
            'end': new Date(2016, 2, 1)
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response value out range', function() {
        var model = new Date(2016, 2, 20);
        var data = {
            'initial': new Date(2016, 1, 1),
            'end': new Date(2016, 2, 1)
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(false);
    });

});
