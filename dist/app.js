'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// make bluebird default Promise
//import util from 'util'

// config should be imported before importing any other file
Promise = require('bluebird');

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  _express2.default.listen(_config2.default.port, function () {
    console.info('server started on port ' + _config2.default.port + ' (' + _config2.default.env + ')'); // eslint-disable-line no-console
  });
}

exports.default = _express2.default;
//# sourceMappingURL=app.js.map
