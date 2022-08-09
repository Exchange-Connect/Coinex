const axios = require("axios").default;
const { SendingRequestFailedError, NoResponseFromServerError } = require("@errors/index");
const { RESPONSE_CODES } = require("@constants/index");

module.exports.executeRequest = async function (options) {
	let response;

	try {
		response = await axios(options);
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			// const { data, status, headers } = error.response;
			const { data } = error.response;
			const { code } = data;
			if (code !== 0) throw new RESPONSE_CODES[code].error();
			console.error(error);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.error(error);
			throw new NoResponseFromServerError(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			throw new SendingRequestFailedError(error.message);
		}
	}

	if (response.data && response.data.code !== 0) {
		console.log(RESPONSE_CODES[response.data.code]);
		throw new RESPONSE_CODES[response.data.code].error();
	}

	return response.data.data;
};
