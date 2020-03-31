const Router = require('koa-router')

const api = new Router()
api.prefix('/task')

api.get('/', async ctx => {

  console.log(ctx.user);
  ctx.body = 's'
})

api.post('/', async ctx => {
  const { Task } = ctx.db.models
  const task = new Task({
    name: '湖南省科技厅通知',
    frequency: 3,
    entry: 'http://kjt.hunan.gov.cn/kjt/xxgk/tzgg/tzgg_1/index.html',
    
  })
  
})

module.exports = api