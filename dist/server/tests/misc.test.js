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

describe('## Misc', function () {
  describe('# GET /api/health-check', function () {
    it('should return OK', function (done) {
      (0, _supertest2.default)(_app2.default).get('/api/health-check').expect(_httpStatus2.default.OK).then(function (res) {
        (0, _chai.expect)(res.text).to.equal('OK');
        done();
      }).catch(done);
    });
  });

  describe('# GET /api/404', function () {
    it('should return 404 status', function (done) {
      (0, _supertest2.default)(_app2.default).get('/api/404').expect(_httpStatus2.default.NOT_FOUND).then(function (res) {
        (0, _chai.expect)(res.body.message).to.equal('Not Found');
        done();
      }).catch(done);
    });
  });
});
//# sourceMappingURL=misc.test.js.map
