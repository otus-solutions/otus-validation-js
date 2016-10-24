describe('MinSelectedValidatorService', function() {

  beforeEach(function() {
    module('otus.validation');

    inject(function(_$injector_) {
      service = _$injector_.get('MinSelectedValidatorService');
    });
  });

  it('should return true when answer is not given', function() {
    var answer = {
      'data': {}
    };
    var data = {
      'reference': {}
    };
    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  it('should return FALSE when the answer.data array not contains the minimum requested on reference', function() {
    var answer = {
      'data': [true, true]
    };
    var data = {
      'reference': 3
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(false);
  });

  it('should return TRUE when the answer.data array contains the minimum requested on reference', function() {
    var answer = {
      'data': [true, true]
    };
    var data = {
      'reference': 1
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

  it('should return TRUE when the answer.data.array contains the minimum requested on reference', function() {
    var answer = {
      'data': [true, true]
    };
    var data = {
      'reference': 2
    };

    var response = service.execute(answer, data);
    expect(response.result).toEqual(true);
  });

});
