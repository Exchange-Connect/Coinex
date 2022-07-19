const http = require("./http");
const ws = require("./ws");

module.exports = {
	...http,
	...ws,
};
