import * as streams from "./stream";
import * as https from "./http";
import * as errors from "./errors";

const { initialize } = require("./stream/connections");

export default class Coinex {
	apiKey?: string | null;
	apiSecret?: string | null;

	errors: typeof errors = errors;
	stream: typeof streams & {
		apiKey?: string | null;
		apiSecret?: string | null;
		connect?: (credentionals:{apiKey: string | null; apiSecret: string | null})=>void;
	} = streams;
	http: typeof https & {
		apiKey?: string,
		apiSecret?: string,
	} = https;

	constructor(apiKey?: string, apiSecret?: string) {
		this.apiKey = apiKey;
		this.apiSecret = apiSecret;
		

		this.stream = {
			...this.stream,
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
			...this.http,
			apiKey,
			apiSecret
		}
	}
};
