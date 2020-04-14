const { Schema } = require('mongoose')

const schema = new Schema({
	// 任务名称
	name: { 
		type: String, 
		required: true 
	},
	// 任务入口
	entry: { 
		type: String, 
		required: true 
	},
	// 文章来源
	frequency: { 
		type: Number, 
		required: true 
	},
	target: {
		type: Object,
		required: true
	},
	// 
	start: {
		type: Boolean,
		default: true
	}
}, { 
	versionKey: false,
	timestamps: true
})

// 导出数据模型
module.exports = schema
