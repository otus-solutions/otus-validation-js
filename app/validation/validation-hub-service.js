(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService', 'DistinctValidatorService', 'FutureDateValidatorService',
        'DateInValidatorService', 'LowerLimitValidatorService', 'MaxDateValidatorService', 'MaxLengthValidatorService',
        'MinDateValidatorService', 'MinLengthValidatorService', 'PastDateValidatorService', 'UpperLimitValidatorService'
    ];

    function ValidationHubService(MandatoryValidatorService, DistinctValidatorService, FutureDateValidatorService,
        DateInValidatorService, LowerLimitValidatorService, MaxDateValidatorService, MaxLengthValidatorService,
        MinDateValidatorService, MinLengthValidatorService, PastDateValidatorService, UpperLimitValidatorService) {

        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService,
            'distinct': DistinctValidatorService,
            'future-date': FutureDateValidatorService,
            'date-in': DateInValidatorService,
            'lower-limit': LowerLimitValidatorService,
            'max-date': MaxDateValidatorService,
            'max-length': MaxLengthValidatorService,
            'min-date': MinDateValidatorService,
            'min-length': MinLengthValidatorService,
            'past-date': PastDateValidatorService,
            'upper-limit': UpperLimitValidatorService,
        };
    }

}());
