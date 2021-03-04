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

function getAll() {
	return new Promise((resolve, reject) => {
		postModel.find((err, data) => {
			return err ? reject(err) : resolve(data);
		});
	});
}

function findById(id) {
	return new Promise((res, rej) => {
		postModel.findById(id, (err, data) => {
			return err ? rej('pas de ID', err) : res(data);
		});
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

module.exports = { createOne, getAll, deleteOne, findById };
