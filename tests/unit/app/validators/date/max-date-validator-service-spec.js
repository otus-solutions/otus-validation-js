describe('MaxDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MaxDateValidatorService');
        });
    });

    it('should return true when answer value is below or equal the reference', function() {
        var answer = {
            'data': '1/1/2016'
        };
        var data = {
            'reference': '1/1/2016'
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false when answer valuer is above the reference', function() {
        var answer = {
            'data': '2/1/2017'
        };
        var data = {
            'reference': '1/1/2016'
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

});
