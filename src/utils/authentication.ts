const crypto = require("crypto");

function sortObjectAlphabetically(object: Record<string, string>) {
	return Object.keys(object)
		.sort()
		.reduce((previousObject: Record<string, string>, currentKey: number | string) => {
			if (object[currentKey] !== undefined) previousObject[currentKey] = object[currentKey];
			return previousObject;
		}, {});
}

export function signParams(secret: string, params: Record<string, string>, type: string = "md5") {
	if (type == "sha256") {
		if (params.tonce || params.timestamp) {
			params.timestamp = params.tonce ? params.tonce : params.timestamp;
			delete params.tonce;
		}
	}

	const queryStringOfParams: string =
		new URLSearchParams(sortObjectAlphabetically(params)).toString() + `&secret_key=${secret}`;

	let hash: string = crypto.createHash(type).update(queryStringOfParams).digest("hex");

	if (type == "md5") hash = hash.toUpperCase();
	else if (type == "sha256") hash = hash.toLowerCase();

	return hash;
}
