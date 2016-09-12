describe('PastDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('PastDateValidatorService');
        });
    });

    it('should return true when reference equals to false', function() {
        var answer = new Date(2000, 1, 1);
        var data = {
            'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false when value out past', function() {
        var answer = new Date();
        answer.setDate(answer.getDate() + 1);
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should return true when value is in past', function() {
        var answer = new Date();
        answer.setDate(answer.getDate() - 1);
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });
});
