const Router = require('koa-router')
const api = new Router()

api.prefix('/user')

// 注册
api.post('/', async ctx => {
  ctx.verifyParams({
    email: 'string',
    password: 'string'
  })

  const { email, password } = ctx.request.body
  const { User } = ctx.db.models
  const user = await User({
    email,
    password: ctx.util.encrypt(password)
  }).save()
  ctx.body = user
})

module.exports = api