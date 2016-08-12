describe('UpperCaseValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('UpperCaseValidatorService');
        });
    });

    it('should return response in upperCase when data.reference is true', function() {
        var model = 'teste';

        var data = {
            'reference': true
        }

        var response = service.execute(model, data);
        expect(response).toEqual("TESTE");
    });

    it('should return response in upperCase when data.reference is true test 2', function() {
        var model = 'teSTe';

        var data = {
            'reference': true
        }

        var response = service.execute(model, data);
        expect(response).toEqual("TESTE");
    });

    it('should return response not upperCase when data.reference is false', function() {
        var model = 'teste';

        var data  = {
            'reference': false
        }

        var response = service.execute(model, data);
        expect(response).toEqual("teste");
    });
});
