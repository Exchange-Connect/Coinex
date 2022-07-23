/**
 * @fileOverview Realtime Data Streaming
 * @namespace Streams
 */
const connections = require("./connections");


//TODO: onConnection Event Handling
// eslint-disable-next-line no-unused-vars
async function connect(onConnection) {
	connections.initialize([
		{
			name: "futures",
			url: "url",
		},
		{
			name: "spot",
			url: "url",
		},
	]);
}

module.exports = {
	__controls:{
		connect,
	},
	futures: require("./futures"),
	spot: require("./spot"),
};
