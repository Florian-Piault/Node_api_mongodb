// Node
require('dotenv').config() //=> https://www.npmjs.com/package/dotenv
const express = require('express') //=> https://www.npmjs.com/package/express

// Inner
const MongoClass = require('./services/mongo.class')
const postModel = require('./models/post.model')

class ServerClass {
	// Inject properties in the ServerClass
	constructor() {
		this.server = express()
		this.port = process.env.PORT
		this.mongDb = new MongoClass()
	}

	init() {
		postModel
			.create({
				title: 'Mon titre',
				content: 'lorem dskffj rf gjrsprg i gireorug og hdrughd g',
			})
			.then((data) => console.log('postModel created: ', data))
			.catch((e) => console.error('Creation failed : ', e))

		postModel.find((err, post) => {
			err ? console.error('FIND ERR: ', err) : console.log('FIND SUCC : ', post)
		})

		postModel.findById('6040bc51b91c71d543de7ee0', (err, post) => {
			err
				? console.error('FINDID ERR: ', err)
				: console.log('FINDID SUCC : ', post)
		})

		postModel.deleteOne({ _id: '6040bc51b91c71d543de7ee0' }, (err, post) => {
			err
				? console.error('DELETE ERR: ', err)
				: console.log('DELETE SUCC : ', post)
		})

		postModel.findByIdAndUpdate(
			'6040bd1f0abef8d56931854e',
			{ title: 'NEW TITLE UPCASE', content: 'foo' },
			(err, post) => {
				err
					? console.error('UPDATE ERR: ', err)
					: console.log('UPDATE SUCC : ', post)
			}
		)

		// Start config
		this.launch()
	}

	launch() {
		// Connect MongoDB
		this.mongDb
			.connectDb()
			.then((db) => {
				// Start server
				this.server.listen(this.port, () => {
					console.log({
						node: `http://localhost:${this.port}`,
						db: db.url,
					})
				})
			})
			.catch((dbError) => {
				console.log(dbError)
			})
	}
}

const MyServer = new ServerClass()
MyServer.init()
