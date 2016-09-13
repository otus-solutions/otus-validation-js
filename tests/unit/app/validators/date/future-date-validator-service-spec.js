describe('FutureDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('FutureDateValidatorService');
        });
    });

    it('should return true response when answer is future', function() {
        var answer = {
            'data': '01/01/2020'
        };
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false when answer value is out of range', function() {
        var answer = {
            'data': '01/01/2000'
        };
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should return true when validator is not enabled', function() {
        var answer = {
            'data': '01/01/2020'
        };
        var data = {
            'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

});
