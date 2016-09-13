describe('MaxTimeValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MaxTimeValidatorService');
        });
    });

    it('should be return true response when answer value is below reference (regardless the day)', function() {
        var answer = {'data':'Thu Jan 01 1970 01:00:00 GMT-0300 (BRT)'};
        var data = {
            'reference': 'Mon Sep 12 2016 04:00:00 GMT-0300 (BRT)'
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    xit('should be return false response when answer value is not below reference (regardless the day)', function() {
        var answer = 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)';
        var data = {
            'reference': 'Thu Jan 01 1970 04:00:00 GMT-0300 (BRT)'
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(false);
    });
});
