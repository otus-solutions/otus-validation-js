xdescribe('SpecialsValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('SpecialsValidatorService');
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
    
    it('should be validate string alphanumeric if data.reference is true', function() {
        varanswer = '@ $%¨ $%';

        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should be validate string alphanumeric if data.reference is true', function() {
        varanswer = 'TESTE124@#';

        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should be valid string alphanumeric if data.reference is false', function() {
        varanswer = 'Teste124@#';

        var data = {
            'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual('Teste124@#');
    });
});
