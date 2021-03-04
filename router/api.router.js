// Node
const express = require('express');

// Inner
const {
	createOne,
	getAll,
	deleteOne,
	findById,
} = require('../controllers/crud.controller');
const postModel = require('../models/post.model');

class RouterClass {
	constructor() {
		this.router = express.Router();
	}

	routes() {
		// Main API route definition
		this.router.get('/', (req, res) => {
			return res.json({ msg: 'hello from the api' });
		});

		this.router.post('/:endpoint', (req, res) => {
			createOne(req, res);
		});

		this.router.get('/:endpoint/all', (req, res) => {
			getAll()
				.then((data) => {
					return res.json({ data, err: null });
				})
				.catch((err) => {
					return res.json({ data: null, err });
				});
		});

		this.router.delete('/:endpoint', (req, res) => {
			deleteOne(req, res);
		});

		this.router.get('/:endpoint', (req, res) => {
			findById(req.body.id)
				.then((data) => {
					return res.json({ data, err: null });
				})
				.catch((err) => {
					return res.json({ data: null, err });
				});
		});
	}

	init() {
		// Get route fonctions
		this.routes();

		// Sendback router
		return this.router;
	}
}

module.exports = RouterClass;
