import Joi from 'joi'

export default {
  // GET /api/string/palindrome
  stringPalindrome: {
    query: {
      text: Joi.string().required()
    }
  }  
}
