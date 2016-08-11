describe('InValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('InValidatorService');
        });
    });

    it('should return true response value in', function() {
        var model = 12;
        var data = {
            'initial': 1,
            'end': 15
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(true);
    });

    it('should return false respnse value out of range', function() {
        var model = 20;
        var data = {
            'initial': 1,
            'end': 15
        };

        var response = service.execute(model, data);
        expect(response.result).toEqual(false);
    });

});
