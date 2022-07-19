const connections = require("./connections");

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
