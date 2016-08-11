describe('LowerCaseValidatorService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('LowerCaseValidatorService');
        });
    });

    it('should be return string to lowerCase', function() {
        var string = 'ABC';
        var stringupper = 'aBc';
        //
        // console.log(string.toLowerCase());
        // console.log(stringupper.toUpperCase());


    });

});
