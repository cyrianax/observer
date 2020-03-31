const cron = require('cron')
const db = require('./core.db')

const { Article } = db.models

Article.find({})

const job = cron.job()