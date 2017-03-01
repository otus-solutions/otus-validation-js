describe('DateInValidatorService', function() {

  beforeEach(function() {
    module('otus.validation');

    inject(function(_$injector_) {
      service = _$injector_.get('DateInValidatorService');
    });
  });

  it('should return true when answer is not given', function() {
    var answer = {
      'data': {}
    }; //mm/dd/yyyy
    var data = {
      'reference': {}
    };
    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  it('should return true when answer value is in range', function() {
    var answer = {
      'data': '01/11/2016'
    }; //mm/dd/yyyy
    var data = {
      'reference': {
        'initial': {
          value: '01/01/2016'
        },
        'end': {
          value: '02/01/2016'
        }
      }
    };
    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  it('should return false when answer value is out of range', function() {
    var answer = {
      'data': new Date(2016, 2, 20)
    };
    var data = {
      'reference': {
        'initial': {
          value: new Date(2016, 1, 1)
        },
        'end': {
          value: new Date(2016, 2, 1)
        }
      }
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(false);
  });

  it('should return true when answer value is in range (closed interval - answer equal to initial reference)', function() {
    var answer = {
      'data': '01/01/2016'
    }; //mm/dd/yyyy
    var data = {
      'reference': {
        'initial': {
          value: '01/01/2016'
        },
        'end': {
          value: '02/01/2016'
        }
      }
    };
    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  it('should return true when answer value is in range (closed interval - answer equal to end reference)', function() {
    var answer = {
      'data': '02/01/2016'
    }; //mm/dd/yyyy
    var data = {
      'reference': {
        'initial': {
          value: '01/01/2016'
        },
        'end': {
          value: '02/01/2016'
        }
      }
    };
    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

});
