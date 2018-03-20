'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _isPalindrome = require('is-palindrome');

var _isPalindrome2 = _interopRequireDefault(_isPalindrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkTextForPalindrome(req, res) {
  var isTextPalindrome = (0, _isPalindrome2.default)(req.query.text);
  var responseHTTPStatus = isTextPalindrome ? _httpStatus2.default.OK : _httpStatus2.default.BAD_REQUEST;
  var jsonResult = { isPalindrome: isTextPalindrome };

  return res.status(responseHTTPStatus).json(jsonResult);
}

exports.default = { checkTextForPalindrome: checkTextForPalindrome };
//# sourceMappingURL=string.controller.js.map
