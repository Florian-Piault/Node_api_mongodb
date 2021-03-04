// Node
const express = require('express');

// Inner
const {
	createOne,
	getAll,
	deleteOne,
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
			getAll(req, res);
		});

		this.router.delete('/:endpoint', (req, res) => {
			deleteOne(req, res);
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
