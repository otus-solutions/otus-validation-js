describe('MinTimeValidatorService', function() {

    var Mock = {};

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MinTimeValidatorService');
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

    it('should be return false response when answer value is below reference (regardless the day)', function() {
        var answer = {
            'data': 'Thu Jan 01 1970 01:00:00 GMT-0300 (BRT)'
        };
        var data = {
            'reference': 'Mon Sep 12 2016 04:00:00 GMT-0300 (BRT)'
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(false);
    });

    it('should be return true response when answer value is above reference (regardless the day)', function() {
        var answer = {
            'data': 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)'
        };
        var data = {
            'reference': 'Thu Jan 01 1970 04:00:00 GMT-0300 (BRT)'
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    it('should be return true response when answer value is equal to reference (regardless the day)', function() {
        var answer = {
            'data': 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)'
        };
        var data = {
            'reference': 'Thu Jan 01 1970 05:00:00 GMT-0300 (BRT)'
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    xdescribe('_compareTime method', function() {
        it('should return true or false', function() {
            var result = service._compareTime(Mock.answer.data, Mock.data.reference);

            expect(result).toEqual(jasmine.any(Boolean));
        });
    });

    function mock() {
        Mock.answer = {};
        Mock.answer.data = 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)';
        Mock.data = {};
        Mock.data.reference = 'Thu Jan 01 1970 05:00:00 GMT-0300 (BRT)';
    }

});
