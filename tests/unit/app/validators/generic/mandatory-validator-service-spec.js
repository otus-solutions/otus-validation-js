describe('MandatoryValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MandatoryValidatorService');
        });
    });

    it('should return true response when model is answered', function() {
        var model = 'Respondido';
        var data = {};

        var response = service.execute(model, data);
        expect(true).toEqual(response.result);
    });

    it('should return false response when model is not answered (String)', function() {
        var model = '';
        var data = {};

        var response = service.execute(model, data);
        expect(false).toEqual(response.result);
    });

    it('should return false response when model is not answered (Object)', function() {
        var model;
        var data = {};

        var response = service.execute(model, data);
        expect(false).toEqual(response.result);
    });
});
