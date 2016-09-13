describe('InValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('InValidatorService');
        });
    });

    it('should return true when response value in range', function() {
        var answer = {'data': 12};
        var data = {
            'initial': 1,
            'end': 15
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false when response value out of range', function() {
        var answer = {'data': 20};
        var data = {
            'initial': 1,
            'end': 15
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

});
