const cron = require('cron')
const db = require('./core.db')
const { Task } = db.models

module.exports = {
  init: async () => {
    const tasks = await Task.find()
    const jobs = tasks.reduce((jobs, task) => {
      jobs[task._id] = cron.job({
        cronTime: '',
        start: task.start,
        tick: () => {
    
        }
      })
    }, {})
    
    return jobs
  },
}