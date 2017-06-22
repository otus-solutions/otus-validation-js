describe('ValidationResponseFactory', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            factory = _$injector_.get('ValidationResponseFactory');
        });
    });

    it('should create validation response with correct id', function() {
        var elementID = 'ID';
        var validationResponse = factory.create(elementID);
        expect(validationResponse.elementID).toEqual(elementID);
    });

    it('should add validator response when call AddValidatorResponse', function() {
        var elementID = 'ID';
        var response = {
            'response': 'response'
        };

        var validationResponse = factory.create(elementID);
        validationResponse.addValidatorResponse(response);

        expect(validationResponse.validatorsResponse.length).toEqual(1);
    });
});
