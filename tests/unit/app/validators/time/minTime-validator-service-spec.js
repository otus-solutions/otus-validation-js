describe('MinTimeValidatorService', function() {

    var Mock = {};

    beforeEach(function() {
        module('otus.validation');

        mock();

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
            'reference': {value:'Mon Sep 12 2016 04:00:00 GMT-0300 (BRT)'}
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(false);
    });

    xit('should be return true response when answer value is above reference (regardless the day)', function() {
        var answer = {
            'data': 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)'
        };
        var data = {
            'reference': {value:'Thu Jan 01 1970 04:00:00 GMT-0300 (BRT)'}
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    xit('should be return true response when answer value is equal to reference (regardless the day)', function() {
        var answer = {
            'data': 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)'
        };
        var data = {
            'reference': {value:'Thu Jan 01 1970 05:00:00 GMT-0300 (BRT)'}
        };

        var response = service.execute(answer, data);
        expect(response.result).toBe(true);
    });

    xdescribe('_compareTime method', function() {
        it('should return true or false', function() {
            var result = service._compareTime(Mock.answer1.data, Mock.data1.reference);

            expect(result).toEqual(jasmine.any(Boolean));
        });

        it('should return true when answer value is above reference', function() {
            var result = service._compareTime(Mock.answer1.data, Mock.data1.reference);

            expect(result).toEqual(true);
        });

        it('should return false when answer value is below reference', function() {
            var result = service._compareTime(Mock.answer2.data, Mock.data2.reference);

            expect(result).toEqual(false);
        });
    });

    function mock() {
        Mock.answer1 = {};
        Mock.answer1.data = 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)';
        Mock.data1 = {};
        Mock.data1.reference = 'Thu Jan 01 1970 05:00:00 GMT-0300 (BRT)';

        Mock.answer2 = {};
        Mock.answer2.data = 'Thu Jan 01 1970 01:00:00 GMT-0300 (BRT)';
        Mock.data2 = {};
        Mock.data2.reference = 'Mon Sep 12 2016 04:00:00 GMT-0300 (BRT)';
    }
});
