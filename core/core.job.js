const cron = require('cron')
const db = require('./core.db')
const { spawn } = require('child_process')

const executeTask = task => {
  spawn('node', ['./core/core.task.js', JSON.stringify(task)], {
    stdio: 'inherit'
  })
}

module.exports = {
  init: async () => {
    const { Task } = db.models
    const tasks = await Task.find()
    
    const jobs = tasks.reduce((jobs, task) => {
      jobs[task._id] = cron.job({
        cronTime: '*/20 * * * * *',
        start: task.start,
        onTick: async () => {
          executeTask(task)
        }
      })

      return jobs
    }, {})
    
    return jobs
  },
}