const mongoose = require('mongoose')
const config = require('../config')
const { article, task } = require('../schema')

mongoose.Promise = global.Promise
mongoose.connect(config.db, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
  console.log('--- Database has connected ---')
})
db.on('close', () => {
  console.log('--- Database has closed ---')
})

db.model('Article', article)
db.model('Task', task)

module.exports = db