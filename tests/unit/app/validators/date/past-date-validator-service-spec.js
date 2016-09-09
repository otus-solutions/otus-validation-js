xdescribe('PastDateValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('PastDateValidatorService');
        });
    });

    it('should return true response when model is past', function() {
        var model = new Date(2000, 1, 1);
        var data = {
            'reference': true
        };

        var response = service.execute(model, data);
        expect(true).toEqual(response.result);
    });

    it('should return false response value out past', function() {
        var model = new Date(2020, 1, 1);
        var data = {
            'reference': false
        };

        var response = service.execute(model, data);
        expect(response).not.toBeDefined();
    });

});
