(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService', 'DistinctValidatorService', 'FutureDateValidatorService',
        'DateInValidatorService', 'LowerLimitValidatorService', 'MaxDateValidatorService', 'MaxLengthValidatorService',
        'MinDateValidatorService', 'MinLengthValidatorService', 'PastDateValidatorService', 'UpperLimitValidatorService',
        'InValidatorService', 'PrecisionValidatorService', 'ScaleValidatorService', 'AlphanumericValidatorService', 'LowerCaseValidatorService',
        'SpecialsValidatorService', 'UpperCaseValidatorService', 'MaxTimeValidatorService', 'MinTimeValidatorService', 'MinSelectedValidatorService',
        'MaxSelectedValidatorService', 'QuantityValidatorService'
    ];

    function ValidationHubService(MandatoryValidatorService, DistinctValidatorService, FutureDateValidatorService,
        DateInValidatorService, LowerLimitValidatorService, MaxDateValidatorService, MaxLengthValidatorService,
        MinDateValidatorService, MinLengthValidatorService, PastDateValidatorService, UpperLimitValidatorService, InValidatorService,
        PrecisionValidatorService, ScaleValidatorService, AlphanumericValidatorService, LowerCaseValidatorService, SpecialsValidatorService,
        UpperCaseValidatorService, MaxTimeValidatorService, MinTimeValidatorService, MinSelectedValidatorService, MaxSelectedValidatorService,
        QuantityValidatorService) {

        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService,
            'distinct': DistinctValidatorService,
            'futureDate': FutureDateValidatorService,
            'rangeDate': DateInValidatorService,
            'lowerLimit': LowerLimitValidatorService,
            'maxDate': MaxDateValidatorService,
            'maxLength': MaxLengthValidatorService,
            'minDate': MinDateValidatorService,
            'minLength': MinLengthValidatorService,
            'pastDate': PastDateValidatorService,
            'upperLimit': UpperLimitValidatorService,
            'in': InValidatorService,
            'precision': PrecisionValidatorService,
            'scale': ScaleValidatorService,
            'alphanumeric': AlphanumericValidatorService,
            'lowerCase': LowerCaseValidatorService,
            'specials': SpecialsValidatorService,
            'upperCase': UpperCaseValidatorService,
            'maxTime': MaxTimeValidatorService,
            'minTime': MinTimeValidatorService,
            'minSelected': MinSelectedValidatorService,
            'maxSelected': MaxSelectedValidatorService,
            'quantity': QuantityValidatorService

        };
    }

}());
