describe('SpecialsValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('SpecialsValidatorService');
        });
    });

    it('should be validate string alphanumeric if data.reference is true', function() {
        var model = '$@#';

        var data = {
            'reference': true
        };

        var response = service.execute(model, data);
        expect(response).toEqual(true);
    });

    it('should be validate string alphanumeric if data.reference is true', function() {
        var model = 'TESTE124@#';

        var data = {
            'reference': true
        };

        var response = service.execute(model, data);
        expect(response).toEqual(false);
    });

    it('should be valid string alphanumeric if data.reference is false', function() {
        var model = 'Teste124@#';

        var data = {
            'reference': false
        };

        var response = service.execute(model, data);
        expect(response).toEqual('Teste124@#');
    });
});
