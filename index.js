const { initialize } = require("./stream/connections");

module.exports = class Coinex {
	constructor(apiKey = null, apiSecret = null) {
		this.apiKey = apiKey;
		this.apiSecret = apiSecret;
		this.errors = require("./errors");

		this.stream = {
			...require("./stream"),
			apiKey,
			apiSecret,
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
			apiKey,
			apiSecret,
		};
	}
};
