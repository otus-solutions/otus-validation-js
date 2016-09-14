describe('PastDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('PastDateValidatorService');
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


    it('should return true when reference equals to false', function() {
        var answer = {
            'data': '1/1/2016'
        };
        var data = {
            'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return true response when answer current day', function() {
        var answer = {
            'data': new Date().toString()
        };
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });


    it('should return false when value is not in past', function() {
        var answer = {
            'data': new Date()
        };
        answer.data.setDate(answer.data.getDate()+1);
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(false);
    });

    it('should return true when value is in past', function() {
        var answer = {
            'data': '1/1/2016'
        };
        var data = {
            'reference': true
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });

    it('should return true when validator is not enabled', function() {
        var answer = {
            'data': '01/01/2020'
        };
        var data = {
            'reference': false
        };

        var response = service.execute(answer, data);
        expect(response.result).toEqual(true);
    });


});
