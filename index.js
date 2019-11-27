const getCanonicalLinkedinUrl = require('./lib/getCanonicalLinkedinUrl');
const getDomain = require('./lib/getDomain');
const getDomainName = require('./lib/getDomainName');
const getHostName = require('./lib/getHostname');
const isValidIP = require('./lib/isValidIP');
const isValidURI = require('./lib/isValidURI');
const parse = require('./lib/parse');

module.exports = {
  getCanonicalLinkedinUrl,
  getDomain,
  getDomainName,
  getHostName,
  isValidIP,
  isValidURI,
  parse
};
