const crypto = require("crypto");

function sortObjectAlphabetically(object) {
	return Object.keys(object)
		.sort()
		.reduce((previousObject, currentKey) => {
			previousObject[currentKey] = object[currentKey];
			return previousObject;
		}, {});
}

module.exports.signParams = function (secret, params) {
	const queryStringOfParams =
		new URLSearchParams(sortObjectAlphabetically(params)).toString() + `&secret_key=${secret}`;

	return crypto.createHash("md5").update(queryStringOfParams).digest("hex").toUpperCase();
};
