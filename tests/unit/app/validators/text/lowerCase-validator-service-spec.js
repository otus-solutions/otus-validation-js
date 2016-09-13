describe('LowerCaseValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('LowerCaseValidatorService');
        });
    });

    it('should return response in lowerCase when data.reference is true', function() {
        var answer = {'data': 'TESTE'};

        var data = {
          'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual("teste");

    });

    it('should return response in lowerCase when data.reference is true teste 2', function() {
        var answer = {'data': 'TESte'};

        var data = {
          'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual("teste");

    });

    it('should return response not in lowerCase when data.reference is false', function() {
        var answer = {'data': 'TESTE'};

        var data = {
          'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual("TESTE");
    });

});
