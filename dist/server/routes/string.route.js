'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _paramValidation = require('../../config/param-validation');

var _paramValidation2 = _interopRequireDefault(_paramValidation);

var _string = require('../controllers/string.controller');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

router.route('/palindrome')
/** GET /api/string/palindrome:text - Check if text is a palindrome */
.get((0, _expressValidation2.default)(_paramValidation2.default.stringPalindrome), _string2.default.checkTextForPalindrome);

exports.default = router;
//# sourceMappingURL=string.route.js.map
