describe('MaxTimeValidatorService', function() {

  var Mock = {};

  beforeEach(function() {
    module('otus.validation');


    inject(function(_$injector_) {
      mock(_$injector_);
      service = _$injector_.get('MaxTimeValidatorService');
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

  it('should be return true response when answer value is below reference (regardless the day)', function() {
    var answer = {
      'data': new Date(new Date().setHours(3))
    };
    var data = {
      'reference': {value:'Mon Sep 12 2016 04:00:00 GMT-0300 (BRT)'}
    };


    var response = service.execute(answer, data);
    expect(response.result).toBe(true);
  });

  it('should be return false response when answer value is not below reference (regardless the day)', function() {
    var answer = {
      'data': 1473667200000
    };
    var data = {
      'reference': {value:'Thu Jan 01 1970 04:00:00 GMT-0300 (BRT)'}
    };

    var response = service.execute(answer, data);
    expect(response.result).toBe(false);
  });

  it('should be return true response when answer value is equal to reference (regardless the day)', function() {
    var answer = {
      'data': 1473667200000
    };
    var data = {
      'reference': {value:'Thu Jan 01 1970 05:00:00 GMT-0300 (BRT)'}
    };

    var response = service.execute(answer, data);
    expect(response.result).toBe(true);
  });

  xdescribe('_compareTime method', function() {
    it('should return true or false', function() {
      var result = service._compareTime(Mock.answer1.data, Mock.time.reference);

      expect(result).toEqual(jasmine.any(Boolean));
    });

    it('should return true when answer value is equal to reference', function() {
      var result = service._compareTime(Mock.answer1.data, Mock.time.reference);

      expect(result).toEqual(true);
    });

    it('should return false when answer value is not below reference', function() {
      var result = service._compareTime(Mock.answer2.data, Mock.data.reference);

      expect(result).toEqual(false);
    });
  });

  function mock(_$injector_) {
    Mock.GlobalTimeService = _$injector_.get('GlobalTimeService');
    Mock.answer1 = {};
    Mock.answer1.data = 'Mon Sep 12 2016 05:00:00 GMT-0300 (BRT)';
    Mock.time = {};
    Mock.time.reference = new Date(1970,0,1,5,0,0);

    Mock.answer2 = {};
    Mock.answer2.data = 'Thu Jan 01 1970 05:00:00 GMT-0300 (BRT)';
    Mock.data = {};
    Mock.data.reference = new Date(2017,3,10,5,30,0);
  }

});
