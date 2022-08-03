// const axios = require("axios");
// import { METHOD_TYPE } from "../http";

// const http = "http";

require("./market");

module.exports = {
	...require("./market"),
	...require("./account"),
	...require("./futures"),
	...require("./spot"),
	...require("./trading"),
};
