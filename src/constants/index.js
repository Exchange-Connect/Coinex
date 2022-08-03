const http = require("./http");
const stream = require("./stream");

module.exports = {
	...http,
	...stream,
};
