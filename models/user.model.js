const mangoose = require('mangoose');
const { Schema } = mangoose;

const MySchema = new Schema({
	email: {
		unique: true,
		type: String,
	},
	password: String,
	firstname: String,
	lastname: String,

	DateCreated: {
		type: Date,
		default: new Date(),
	},

	LastConnexion: {
		type: Date,
		default: new Date(),
	},
});

const MyModel = mongoose.model('user', MySchema);
module.exports = MyModel;
