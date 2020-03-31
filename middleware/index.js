const koaLogger = require('koa-logger')
const koaBodyparser = require('koa-bodyparser')
const koaCors = require('@koa/cors')
const koaParameter = require('koa-parameter')
const koaError = require('koa-json-error')
const router = require('./mid.router')

module.exports = app => {
  app.use(koaError())
  app.use(koaCors())
  app.use(koaLogger())
  app.use(koaBodyparser())
  app.use(koaParameter(app))
  app.use(router.routes())
  app.use(router.allowedMethods())
}