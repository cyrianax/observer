const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = {
  sign: data => {
    return jwt.sign(data, config.jwtSecret, { expiresIn: '1h' })
  },
  getPageInfo: ({ pageSize = 20, pageIndex = 1 }) => {
    const size = Math.max(+pageSize, 10)
    const index = size * (Math.max(+pageIndex, 1) - 1)
    return { size, index }
  },
  encrypt: password => {
    return crypto.createHash('SHA256').update(password).digest('hex')
  },
}