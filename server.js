// Node
require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
const express = require('express'); //=> https://www.npmjs.com/package/express
const path = require('path'); //=> https://www.npmjs.com/package/path
const bodyParser = require('body-parser'); //=> https://www.npmjs.com/package/body-parser

// Inner
const MongoClass = require('./services/mongo.class');
const postModel = require('./models/post.model');
const route = require('./router/api.router');

class ServerClass {
	// Inject properties in the ServerClass
	constructor() {
		this.server = express();
		this.port = process.env.PORT;
		this.mongoDb = new MongoClass();
	}

	init() {
		this.server.set('views', __dirname + '/www');
		this.server.use(express.static(path.join(__dirname, 'www')));
		this.server.set('view engine', 'ejs');
		this.config();
	}

	config() {
		this.server.use(bodyParser.json({ limit: '20mb' }));
		this.server.use(bodyParser.urlencoded({ extended: true }));
		this.launch();
	}

	launch() {
		// Connect MongoDB
		this.mongoDb
			.connectDb()
			.then((db) => {
				const ApiRouterClass = require('./router/api.router');
				const apiRouter = new ApiRouterClass();
				this.server.use('/Api', apiRouter.init());

				const BackRouterClass = require('./router/backoffice.router');
				const backRouter = new BackRouterClass();
				this.server.use('/', backRouter.init());

				// Start server
				this.server.listen(this.port, () => {
					console.log({
						node: `http://localhost:${this.port}`,
						db: db.url,
					});
				});
			})
			.catch((dbError) => {
				console.log(dbError);
			});
	}
}

const MyServer = new ServerClass();
MyServer.init();
