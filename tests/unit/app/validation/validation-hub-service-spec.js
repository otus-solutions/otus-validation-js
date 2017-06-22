describe('ValidationHubService', function() {

    beforeEach(function() {
        module('otus.validation');

        inject(function(_$injector_) {
            service = _$injector_.get('ValidationHubService', {
                'MandatoryValidatorService': _$injector_.get('MandatoryValidatorService'),
                'DistinctValidatorService': _$injector_.get('DistinctValidatorService'),
                'FutureDateValidatorService': _$injector_.get('FutureDateValidatorService'),
                'DateInValidatorService': _$injector_.get('DateInValidatorService'),
                'LowerLimitValidatorService': _$injector_.get('LowerLimitValidatorService'),
                'MaxDateValidatorService': _$injector_.get('MaxDateValidatorService'),
                'MaxLengthValidatorService': _$injector_.get('MaxLengthValidatorService'),
                'MinDateValidatorService': _$injector_.get('MinDateValidatorService'),
                'MinLengthValidatorService': _$injector_.get('MinLengthValidatorService'),
                'PastDateValidatorService': _$injector_.get('PastDateValidatorService'),
                'UpperLimitValidatorService': _$injector_.get('UpperLimitValidatorService'),
                'InValidatorService': _$injector_.get('InValidatorService'),
                'PrecisionValidatorService': _$injector_.get('PrecisionValidatorService'),
                'scale': _$injector_.get('ScaleValidatorService'),
                'alphanumeric': _$injector_.get('AlphanumericValidatorService'),
                'lowerCase': _$injector_.get('LowerCaseValidatorService'),
                'specials': _$injector_.get('SpecialsValidatorService'),
                'upperCase': _$injector_.get('UpperCaseValidatorService'),
                'maxTime': _$injector_.get('MaxTimeValidatorService'),
                'minTime': _$injector_.get('MinTimeValidatorService'),
                'minSelected': _$injector_.get('MinSelectedValidatorService'),
                'maxSelected': _$injector_.get('MaxSelectedValidatorService'),
                'quantity': _$injector_.get('QuantityValidatorService'),
            });
        });
    });

    it('should must have all available validatores', function() {
        expect(service.validators['mandatory']).toBeDefined();
        expect(service.validators['distinct']).toBeDefined();
        expect(service.validators['futureDate']).toBeDefined();
        expect(service.validators['rangeDate']).toBeDefined();
        expect(service.validators['lowerLimit']).toBeDefined();
        expect(service.validators['maxDate']).toBeDefined();
        expect(service.validators['maxLength']).toBeDefined();
        expect(service.validators['minDate']).toBeDefined();
        expect(service.validators['minLength']).toBeDefined();
        expect(service.validators['pastDate']).toBeDefined();
        expect(service.validators['upperLimit']).toBeDefined();
        expect(service.validators['in']).toBeDefined();
        expect(service.validators['precision']).toBeDefined();
        expect(service.validators['scale']).toBeDefined();
        expect(service.validators['alphanumeric']).toBeDefined();
        expect(service.validators['lowerCase']).toBeDefined();
        expect(service.validators['specials']).toBeDefined();
        expect(service.validators['upperCase']).toBeDefined();
        expect(service.validators['maxTime']).toBeDefined();
        expect(service.validators['minTime']).toBeDefined();
        expect(service.validators['minSelected']).toBeDefined();
        expect(service.validators['maxSelected']).toBeDefined();
        expect(service.validators['quantity']).toBeDefined();
    });


});
