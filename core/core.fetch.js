const puppeteer = require('puppeteer')

module.exports = async target => {
	const browser = await puppeteer.launch({ headless:false })
	const page = await browser.newPage()
	await page.goto(target.url)
	const result = await page.evaluate(target.parse)
	await page.close()
	console.log(result);
	
	return result
}



const fetch = require('./core/core.fetch')

fetch({
	url: 'http://gxt.hunan.gov.cn/gxt/xxgk_71033/tzgg/index.html',
	parse: () => {
		const list = document.querySelectorAll('.tyl-main-right-list tbody>tr')
		
		return Array.from(list).map(item => {
			const article = item.querySelector('td:nth-child(2)>a')
			const date = item.querySelector('td:nth-child(3)')
			return {
				url: article.href,
				title: article.title,
				date: date.innerText
			}
		})
	}
})