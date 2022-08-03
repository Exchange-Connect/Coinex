module.exports = class Coinex {
	errors = require("./errors");
	stream = require("./stream");
	http = require("./http");
	constructor(apikey) {
		this.apikey = apikey;
	}
};
