const { symlinkSync } = require('fs')
const mongoose = require('mongoose') //=> https://www.npmjs.com/package/mongoose
const { Schema } = mongoose

const mySchema = new Schema({
	title: String,
	content: String,
	dateCreated: {
		type: Date,
		default: new Date(),
	},
})

const myModel = mongoose.model('post', mySchema)
module.exports = myModel
