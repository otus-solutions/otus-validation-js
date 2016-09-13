describe('MaxLengthValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('MaxLengthValidatorService');
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

    it('should return true response when size is lower than reference', function() {
        var answer = {'data': 'Example'};
        var data = {
            'size': 100
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return false response when size is greater than reference', function() {
        var answer = {'data': 'Example'};
        var data = {
            'size': 1
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should return true response when size is equal to reference', function() {
        var answer = {'data': 'Example'};
        var data = {
            'size': 7
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

});
