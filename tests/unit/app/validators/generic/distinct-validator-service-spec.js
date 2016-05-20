describe('DistinctValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('DistinctValidatorService');
        });
    });

    it('should return true response when model is distinct to model', function() {
        var model = 1;
        var data = {'reference' : 10};

        var response = service.execute(model, data);
        expect(true).toEqual(response.result);
    });

    it('should return false response when model dont distinct to model', function() {
        var model = 10;
        var data = {'reference' : 10};

        var response = service.execute(model, data);
        expect(false).toEqual(response.result);
    });

});
