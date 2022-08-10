require("module-alias/register");

const { initialize } = require("./stream/connections");

module.exports = class Coinex {
	constructor(apiKey, apiSecret) {
		this.apiKey = apiKey;
		this.apiSecret = apiSecret;
		this.errors = require("./errors");

		this.stream = {
			...require("./stream"),
			apiKey: apiKey,
			apiSecret: apiSecret,
			connect() {
				return initialize({ apiKey, apiSecret }, [
					{
						name: "futures",
						url: "wss://perpetual.coinex.com/",
					},
					{
						name: "spot",
						url: "wss://socket.coinex.com/",
					},
				]);
			},
		};

		this.http = {
			...require("./http"),
			apiKey: apiKey,
			apiSecret: apiSecret,
		};
	}
};
