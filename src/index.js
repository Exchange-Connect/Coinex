require("module-alias/register");

module.exports = class Coinex {
	constructor(apiKey,apiSecret) {
		this.errors = require("./errors");
		
		this.stream = require("./stream");

		this.http = require("./http");
		this.http.apiKey = apiKey;
		this.http.apiSecret = apiSecret;

		this.apiKey = apiKey;
		this.apiSecret = apiSecret;
	}
};
