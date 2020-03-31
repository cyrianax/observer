const { app, db, job, util } = require('./core')
const middlewares = require('./middleware')
const { port } = require('./config')

;(async () => {
  const jobs = await job.init()

  app.run({
    port,
    middlewares,
    context: { db, jobs, util }
  })
})()