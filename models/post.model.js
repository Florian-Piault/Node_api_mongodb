const mongoose = require('mongoose'); //=> https://www.npmjs.com/package/mongoose
const { Schema } = mongoose;

const MySchema = new Schema({
	title: String,
	content: String,
	author: String,
	dateCreated: {
		type: Date,
		default: new Date(),
	},
});

const MyModel = mongoose.model('post', MySchema);
module.exports = MyModel;
