const Router = require('koa-router')
const api = new Router()

api.prefix('/token')

// 登录
api.post('/', async ctx => {
  ctx.verifyParams({
    email: 'string',
    password: 'string'
  })

  const { email, password } = ctx.request.body
  const { User } = ctx.db.models
  const user = await User.findOne({ email })
  
  if (user) {
    if (user.password === ctx.util.encrypt(password)) {
      const { id, email } = user
      const token = ctx.util.sign({ id, email })
      ctx.body = {
        id,
        email,
        token
      }
    } else {
      ctx.status = 401
      ctx.body = '用户密码错误'
    }
  } else {
    ctx.status = 401
    ctx.body = '用户不存在'
  }
})

module.exports = api