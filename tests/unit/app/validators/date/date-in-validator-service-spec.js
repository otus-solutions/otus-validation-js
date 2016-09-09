describe('DateInValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('DateInValidatorService');
        });
    });

    it('should return true response value in range', function() {
        var answer = {'data':'01/11/2016'};
        var data = {
            'initial': '01/01/2016', //mm/dd/aaaa
            'end': '02/01/2016'
        };
        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response value out range', function() {
        var answer = {'data':new Date(2016, 2, 20)};
        var data = {
            'initial': new Date(2016, 1, 1),
            'end': new Date(2016, 2, 1)
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

});
