describe('the global time service', function() {

  var Mock = {};
  var service;

  beforeEach(function() {
    module('otus.validation');

    mock();

    inject(function(_$injector_) {
      service = _$injector_.get('GlobalTimeService');
    });
  });

  describe('the ignoreDate method', function() {
    it('should set the date part of a Date Object to 01/01/1970 and keep the time part untouched', function() {
      var date = new Date();
      service.resetDate(date);
      expect(date.getDate()).toEqual(1);
      expect(date.getMonth()).toEqual(0);
      expect(date.getFullYear()).toEqual(1970);
    });
  });

  describe('the getMiliTime method', function() {
    it('should ignore the date part', function() {

      var someDate = new Date(Mock.ISOString);
      var otherDate = new Date(Mock.ISOString);
      expect(someDate.getTime()).toEqual(otherDate.getTime());

      otherDate.setDate(someDate.getDate() + 1);
      otherDate.setFullYear(someDate.getFullYear() + 10);

      expect(service.getMiliTime(someDate)).toEqual(service.getMiliTime(otherDate));
    });

    it('should mount another date with the same time part and 1970 date', function() {

      var date = new Date(Mock.ISOString);
      date.setHours(1);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      var miliTime = service.getMiliTime(date);
      var newDate = new Date(miliTime);

      expect(newDate.getDate()).toEqual(1);
      expect(newDate.getMonth()).toEqual(0);
      expect(newDate.getFullYear()).toEqual(1970);
      expect(newDate.getHours()).toEqual(1);
      expect(newDate.getMinutes()).toEqual(0);
      expect(newDate.getSeconds()).toEqual(0);

    });
  });

  function mock() {
    Mock.DateToString = "Sun Jan 29 2017 23:00:00 GMT-0200 (BRST)";
    Mock.ISOString = "2017-01-30T01:00:00.000Z";
    Mock.GMTString = "Mon, 30 Jan 2017 01:00:00 GMT";
    Mock.ImmutableDateFormat = '1970-01-01 01:00:00.0';
  }
});
