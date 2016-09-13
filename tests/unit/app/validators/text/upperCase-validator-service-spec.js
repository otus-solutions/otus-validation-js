xdescribe('UpperCaseValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('UpperCaseValidatorService');
        });
    });

    it('should return response in upperCase when data.reference is true', function() {
        var answer = {'data': 'teste'};

        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual("TESTE");
    });

    it('should return response in upperCase when data.reference is true test 2', function() {
        var answer = {'data': 'teSTe'};

        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual("TESTE");
    });

    it('should return response not upperCase when data.reference is false', function() {
        var answer = {'data': 'teste'};

        var data  = {
            'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual("teste");
    });
});
