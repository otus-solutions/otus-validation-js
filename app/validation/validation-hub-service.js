(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('ValidationHubService', ValidationHubService);

    ValidationHubService.$inject = ['MandatoryValidatorService', 'DistinctValidatorService', 'FutureDateValidatorService',
        'DateInValidatorService', 'LowerLimitValidatorService', 'MaxDateValidatorService', 'MaxLengthValidatorService',
        'MaxTimeValidatorService', 'MinDateValidatorService', 'MinLengthValidatorService', 'MinTimeValidatorService',
	'PastDateValidatorService', 'UpperLimitValidatorService'
    ];

    function ValidationHubService(MandatoryValidatorService, DistinctValidatorService, FutureDateValidatorService,
        DateInValidatorService, LowerLimitValidatorService, MaxDateValidatorService, MaxLengthValidatorService,
        MaxTimeValidatorService, MinDateValidatorService, MinLengthValidatorService, MinTimeValidatorService,
	PastDateValidatorService, UpperLimitValidatorService) {

        var self = this;

        self.validators = {
            'mandatory': MandatoryValidatorService,
            'in': MandatoryValidatorService,
            'distinct': DistinctValidatorService,
            'future-date': FutureDateValidatorService,
            'date-in': DateInValidatorService,
            'lower-limit': LowerLimitValidatorService,
            'max-date': MaxDateValidatorService,
            'max-length': MaxLengthValidatorService,
            'max-time': MaxTimeValidatorService,
            'min-date': MinDateValidatorService,
            'min-length': MinLengthValidatorService,
            'min-time': MinTimeValidatorService,
            'past-date': PastDateValidatorService,
            'upper-limit': UpperLimitValidatorService,

        };
    }

}());
