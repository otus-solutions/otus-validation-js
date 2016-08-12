describe('MaxTimeValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MaxTimeValidatorService');
        });
    });

    it('should be return true response when is less than reference', function() {
        var model = '11:40';

        var data = {
            'reference': '15:20'
        }

        var response = service.execute(model, data);
        expect(response.result).toBe(true);
    });

    it('should be return false response when is greater than reference', function() {
        var model = '18:00';

        var data = {
            'reference': '17:00'
        }

        var response = service.execute(model, data);
        expect(response.result).toBe(false);
    });
});
