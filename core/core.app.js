const Koa = require('koa')
const app = new Koa()

module.exports = {
  run: ({ port, context, middlewares, keys = [] }) => {
    middlewares(app)

    for (const key in context) {
      if (context.hasOwnProperty(key)) {
        app.context[key] = context[key]
      }
    }
    
    app.keys = keys
    app.listen(port)
  }
}
