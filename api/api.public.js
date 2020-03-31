const Router = require('koa-router')
const token = require('./api.public.token')
const user = require('./api.public.user')

const api = new Router()
api.prefix('/public')
api.use(token.routes(), token.allowedMethods())
api.use(user.routes(), user.allowedMethods())

module.exports = api