const mongoose = require('mongoose')
const config = require('../config')
const { article } = require('../schema')

mongoose.Promise = global.Promise
mongoose.connect(config.db, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
  console.log('--- Database has connected ---')
})

db.model('Article', article)

module.exports = db