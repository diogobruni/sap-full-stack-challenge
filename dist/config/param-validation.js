'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // GET /api/string/palindrome
  stringPalindrome: {
    query: {
      text: _joi2.default.string().required()
    }
  }
};
//# sourceMappingURL=param-validation.js.map
