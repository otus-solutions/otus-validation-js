describe('DistinctValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('DistinctValidatorService');
        });
    });

    it('should return true response when answer is distinct to reference value', function() {
        var answer = {'data': 1};
        var data = {'reference' : 10};

        var response = service.execute(answer, data);
        expect(true).toEqual(response.result);
    });

    it('should return false response when answer dont distinct to reference value', function() {
        var answer = {'data': 10};
        var data = {'reference' : 10};

        var response = service.execute(answer, data);
        expect(false).toEqual(response.result);
    });

});
