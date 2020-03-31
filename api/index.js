const Router = require('koa-router')
const router = new Router()

router.prefix('/api')

const useAPI = list => {
  list.forEach(name => {
    const api = require(`./api.${name}`)
    router.use(api.routes(), api.allowedMethods())    
  })
}

useAPI([
  'task',
])

module.exports = router