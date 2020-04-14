const fetch = require('../fetch')
const db = require('./core.db')

;(async () => {
	const task = JSON.parse(process.argv[2])
	const { Article } = db.models

	const list = await fetch.headless(task)
	const existed = await Article.find({ title: { $in: list.map(item => item.title) } })
	const articles = list.filter(item => existed.findIndex(artilce => artilce.title === item.title) < 0)

	if (articles.length) {
		const result = await Article.insertMany(articles.map(({ title, href, date }) => ({
			title: title,
			url: href,
			pubDate: new Date(date),
			source: task.name
		})))
		console.log(result);
	}

	db.close()
})()
