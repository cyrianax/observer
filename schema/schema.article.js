const { Schema } = require('mongoose')

const schema = new Schema({
	// 文章标题
	title: { 
		type: String, 
		required: true 
	},
	// 文章链接
	url: { 
		type: String, 
		required: true 
	},
	// 文章来源
	source: { 
		type: String, 
		required: true 
	},
	// 文章发布日期
	pubDate: { 
		type: Date, 
		required: true 
	}
}, { 
	versionKey: false,
	timestamps: true
})

// 导出数据模型
module.exports = schema
