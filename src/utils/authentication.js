const crypto = require("crypto");

function sortObjectAlphabetically(object) {
	return Object.keys(object)
		.sort()
		.reduce((previousObject, currentKey) => {
			previousObject[currentKey] = object[currentKey];
			return previousObject;
		}, {});
}

module.exports.signParams = function (secret, params, type = "md5") {
	if (type == "sha256") {
		params.timestamp = params.tonce;
		delete params.tonce;
	}

	const queryStringOfParams =
		new URLSearchParams(sortObjectAlphabetically(params)).toString() + `&secret_key=${secret}`;

	let hash = crypto.createHash(type).update(queryStringOfParams).digest("hex");

	if (type == "md5") hash = hash.toUpperCase();
	else if (type == "sha256") hash = hash.toLowerCase();

	return hash;
};
