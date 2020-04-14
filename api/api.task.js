const Router = require('koa-router')

const api = new Router()
api.prefix('/task')

api.get('/', async ctx => {
  const { Task } = ctx.db.models
  ctx.body = await Task.find()
})

api.post('/', async ctx => {
  const { Task } = ctx.db.models
  const task = new Task({
    name: '湖南省科技厅通知',
    frequency: 30,
    entry: 'http://kjt.hunan.gov.cn/kjt/xxgk/tzgg/tzgg_1/index.html',
    target: {
      list: '.tyl-main-right-list tbody>tr',
      title: {
        selector: 'td:nth-child(1)>a',
      },
      href: {
        selector: 'td:nth-child(1)>a',
        prop: 'href'
      },
      date: {
        selector: 'td:nth-child(2)',
      }
    }
  })
  const result = await task.save()
  ctx.body = result
})

api.post('/clear', async ctx => {
  const { Task } = ctx.db.models
  ctx.body = await Task.remove()
})

module.exports = api