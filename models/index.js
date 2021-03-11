const { Model } = require('mongoose');

const Models = {
	post: require('./post.model'),
	comment: require('./comment.model'),
};

module.exports = Models;
