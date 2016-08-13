describe('AlphanumericValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('AlphanumericValidatorService');
        });
    });

    it('should be validate string alphanumeric if data.reference is true', function() {
      
    });
});
