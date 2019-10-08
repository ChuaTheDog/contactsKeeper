const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
	console.log('Connection Established');
});

mongoose.connection.on('reconnected', () => {
	console.log('Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
	console.log('Connection Disconnected');
});

mongoose.connection.on('close', () => {
	console.log('Connection Closed');
});

mongoose.connection.on('error', error => {
	console.log('ERROR: ' + error);
});

const connectDB = async () => {
	await mongoose.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: false
	});
};

connectDB().catch(error => console.error(error));

module.exports = connectDB;
