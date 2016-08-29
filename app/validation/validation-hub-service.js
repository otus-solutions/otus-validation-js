(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService', 'DistinctValidatorService', 'FutureDateValidatorService',
        'DateInValidatorService', 'LowerLimitValidatorService', 'MaxDateValidatorService', 'MaxLengthValidatorService',
        'MinDateValidatorService', 'MinLengthValidatorService', 'PastDateValidatorService', 'UpperLimitValidatorService',
        'InValidatorService', 'PrecisionValidatorService', 'ScaleValidatorService', 'AlphanumericValidatorService', 'LowerCaseValidatorService',
        'SpecialsValidatorService', 'UpperCaseValidatorService', 'MaxTimeValidatorService', 'MinTimeValidatorService'
    ];

    function ValidationHubService(MandatoryValidatorService, DistinctValidatorService, FutureDateValidatorService,
        DateInValidatorService, LowerLimitValidatorService, MaxDateValidatorService, MaxLengthValidatorService,
        MinDateValidatorService, MinLengthValidatorService, PastDateValidatorService, UpperLimitValidatorService, InValidatorService,
        PrecisionValidatorService, ScaleValidatorService, AlphanumericValidatorService, LowerCaseValidatorService, SpecialsValidatorService,
        UpperCaseValidatorService, MaxTimeValidatorService, MinTimeValidatorService) {

        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService,
            'distinct': DistinctValidatorService,
            'future-date': FutureDateValidatorService,
            'range-date': DateInValidatorService,
            'lower-limit': LowerLimitValidatorService,
            'max-date': MaxDateValidatorService,
            'max-length': MaxLengthValidatorService,
            'min-date': MinDateValidatorService,
            'min-length': MinLengthValidatorService,
            'past-date': PastDateValidatorService,
            'upper-limit': UpperLimitValidatorService,
            'in': InValidatorService,
            'precision': PrecisionValidatorService,
            'scale': ScaleValidatorService,
            'alphanumeric': AlphanumericValidatorService,
            'lowerCase': LowerCaseValidatorService,
            'specials': SpecialsValidatorService,
            'upperCase': UpperCaseValidatorService,
            'maxTime': MaxTimeValidatorService,
            'minTime': MinTimeValidatorService,
        };
    }

}());
