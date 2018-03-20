import request from 'supertest'
import httpStatus from 'http-status'
import chai, { expect } from 'chai'
import app from '../../app'
import config from '../../config/config'

chai.config.includeStack = true

describe('## String APIs', () => {
  describe('# GET /api/string/palindrome', () => {
    it('ABA should return 200 status', (done) => {
      request(app)
        .get('/api/string/palindrome?text=ABA')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.isPalindrome).to.equal(true)
          done()
        })
        .catch(done)
    })

    it('MACACO should return 400 status', (done) => {
      request(app)
        .get('/api/string/palindrome?text=MACACO')
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          expect(res.body.isPalindrome).to.equal(false)
          done()
        })
        .catch(done)
    })

    it('A MAN A PLAN A CANAL PANAMA should return 400 status', (done) => {
      request(app)
        .get('/api/string/palindrome?text=A MAN A PLAN A CANAL PANAMA')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.isPalindrome).to.equal(true)
          done()
        })
        .catch(done)
    })
  })
})