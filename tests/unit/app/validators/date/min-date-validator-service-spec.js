describe('MinDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MinDateValidatorService');
        });
    });

    it('should return true when answer is not given', function() {
        var answer = {
            'data': {}
        }; //mm/dd/yyyy
        var data = {'reference':{}};
        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
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

    it('should return true when answer value is above the reference', function() {
        var answer = {
            'data': new Date('Wed Sep 07 2016 00:00:00 GMT-0300 (BRT)')
        };
        var data = {
            'reference': '2016-07-01T03:00:00.000Z'
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return true when answer value is equal to reference', function() {
        var answer = {
            'data': '1/1/2016'
        };
        var data = {
            'reference': '1/1/2016'
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });
});
