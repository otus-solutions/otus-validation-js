(function() {
  'use strict';

  angular
    .module('otus.validation')
    .service('GlobalTimeService', Service);

  Service.$inject = [];

  function Service() {
    var self = this;

    /*Public Interface*/
    self.ignoreDate = ignoreDate;
    self.getMiliTime = getMiliTime;
    self.immutableDateFormat = immutableDateFormat;
    self.resetDate = resetDate;

    /*The date.getMiliTime() method will return only the time part as milisseconds */
    function getMiliTime(date) {
      return ignoreDate(date).getTime();
    }

    /*In place edition*/
    function resetDate(date) {
      date.setDate(1);
      date.setMonth(0);
      date.setFullYear(1970);
    }

    function ignoreDate(date) {
      var copyDate = new Date(date);
      copyDate.setDate(1);
      copyDate.setMonth(0);
      copyDate.setFullYear(1970);
      return copyDate;
    }

    function _padLeadingZero(int) {
      if (int < 10) {
        return '0' + int;
      } else {
        return '' + int;
      }
    }

    function immutableDateFormat(date) {
      var newDate = new Date(date.getTime());
      var year = '' + newDate.getFullYear(),
        month = _padLeadingZero(newDate.getMonth() + 1),
        day = _padLeadingZero(newDate.getDate()),
        hours = _padLeadingZero(newDate.getHours()),
        minutes = _padLeadingZero(newDate.getMinutes()),
        seconds = _padLeadingZero(newDate.getSeconds()),
        milisseconds = newDate.getMilliseconds();

      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milisseconds;
    }
  }
}());
