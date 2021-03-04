const postModel = require('../models/post.model');

function createOne(req, res) {
	postModel
		.create({
			title: req.body.title,
			content: req.body.content,
		})
		.then((data) => {
			return res.send(data);
		})
		.catch((err) => {
			return res.send(err);
		});
}

function getAll(req, res) {
	postModel
		.find()
		.then((data) => {
			return res.send(data);
		})
		.catch((err) => {
			return req.send(err);
		});
}

function deleteOne(req, res) {
	postModel
		.deleteOne({ _id: req.body.id })
		.then((data) => {
			return res.send(data);
		})
		.catch((err) => {
			res.send(err);
		});
}

module.exports = { createOne, getAll, deleteOne };
