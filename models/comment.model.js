const mongoose = require('mongoose'); //=> https://www.npmjs.com/package/mongoose
const { Schema } = mongoose;

const MySchema = new Schema({
	content: String,
	dateCreated: {
		type: Date,
		default: new Date(),
	},
});

const MyModel = mongoose.model('comment', MySchema);
module.exports = MyModel;
