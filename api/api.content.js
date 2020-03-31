const Router = require('koa-router')

const api = new Router()
api.prefix('/content')

api.get('/', async ctx => {

  console.log(ctx.user);
  ctx.body = 's'
})

module.exports = api