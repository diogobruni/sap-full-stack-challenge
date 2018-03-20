'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.includeStack = true;

describe('## String APIs', function () {
  describe('# GET /api/string/palindrome', function () {
    it('ABA should return 200 status', function (done) {
      (0, _supertest2.default)(_app2.default).get('/api/string/palindrome?text=ABA').expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.isPalindrome).to.equal(true);
        done();
      }).catch(done);
    });

    it('MACACO should return 400 status', function (done) {
      (0, _supertest2.default)(_app2.default).get('/api/string/palindrome?text=MACACO').expect(_httpStatus2.default.BAD_REQUEST).then(function (res) {
        (0, _chai.expect)(res.body.isPalindrome).to.equal(false);
        done();
      }).catch(done);
    });

    it('A MAN A PLAN A CANAL PANAMA should return 400 status', function (done) {
      (0, _supertest2.default)(_app2.default).get('/api/string/palindrome?text=A MAN A PLAN A CANAL PANAMA').expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.body.isPalindrome).to.equal(true);
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=string.test.js.map
