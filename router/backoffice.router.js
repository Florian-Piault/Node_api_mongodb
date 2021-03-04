// Node
const express = require('express');

// Inner

class RouterClass {
	constructor() {
		this.router = express.Router();
	}

	routes() {
		// Main API route definition
		this.router.get('/', (req, res) => {
			return res.render('index', { msg: 'hello' });
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
