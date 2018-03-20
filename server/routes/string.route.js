import express from 'express'
import validate from 'express-validation'
import paramValidation from '../../config/param-validation'
import stringCtrl from '../controllers/string.controller'

const router = express.Router() // eslint-disable-line new-cap

router.route('/palindrome')
  /** GET /api/string/palindrome:text - Check if text is a palindrome */
  .get(validate(paramValidation.stringPalindrome), stringCtrl.checkTextForPalindrome)

export default router
