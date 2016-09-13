describe('MandatoryValidatorService', function() {

    var data = {'reference':{}};
    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MandatoryValidatorService');
        });


    });

    it('should return true response when answer is given', function() {
        var answer = {'data':'answer'};

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response when answer is not given (Object)', function() {
        var answer = {'data':{}};

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

});
