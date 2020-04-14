const puppeteer = require('puppeteer')

module.exports = async task => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(task.entry)
	
	const result = await page.evaluate(target => {
		const list = document.querySelectorAll(target.list)
		return Array.from(list).map(item => {
			const getValue = name => {
				const element = target[name]
				if (element) {
					const dom = item.querySelector(element.selector)
					return element.prop ? dom[element.prop] : dom.innerText
				}
			}
			return {
				title: getValue('title'),
				href: getValue('href'),
				date: getValue('date'),
			}
		})	
	}, task.target)

	await page.close()
	return result
}