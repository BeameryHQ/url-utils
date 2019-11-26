const { URL } = require('url');

const parseURI = (uri) => new URL(uri);

module.exports = parseURI;
