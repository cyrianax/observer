const { app, db, util } = require('./core')
const middlewares = require('./middleware')
const { port } = require('./config')

app.run({
  port,
  middlewares,
  context: { db, util }
})
