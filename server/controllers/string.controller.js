import httpStatus from 'http-status'
import isPalindrome from 'is-palindrome'

function checkTextForPalindrome(req, res) {
  const isTextPalindrome = isPalindrome(req.query.text)
  const responseHTTPStatus = isTextPalindrome ? httpStatus.OK : httpStatus.BAD_REQUEST
  const jsonResult = { isPalindrome: isTextPalindrome }

  return res.status(responseHTTPStatus).json(jsonResult)
}

export default { checkTextForPalindrome }
