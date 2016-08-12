describe('MinTimeValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MinTimeValidatorService');
        });
    });

    it('should be return false response when is less than reference', function() {
        var model = '11:40';

        var data = {
            'reference': '15:20'
        }

        var response = service.execute(model, data);
        expect(response.result).toBe(false);
    });

    it('should be return true response when in greater than reference', function() {
        var model = '17:00';

        var data = {
            'reference': '16:10'
        }

        var response = service.execute(model, data);
        expect(response.result).toBe(true);
    });

});
