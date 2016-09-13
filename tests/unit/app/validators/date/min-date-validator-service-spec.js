describe('MinDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MinDateValidatorService');
        });
    });

    it('should return false when answer value is below the reference', function() {
        var answer = {
            'data': '1/1/2016'
        };
        var data = {
            'reference': '1/1/2017'
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should return true when answer value is above or equal the reference', function() {
        var answer = {
            'data': '1/1/2017'
        };
        var data = {
            'reference': '1/1/2016'
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

});
