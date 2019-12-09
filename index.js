const normalize = require('./lib/normalize/');
const getDomain = require('./lib/getDomain/');
const getDomainName = require('./lib/getDomainName/');
const getLinkType = require('./lib/getLinkType');
const getHostName = require('./lib/getHostname/');
const isValidIP = require('./lib/isValidIP/');
const isValidURI = require('./lib/isValidURI/');
const parse = require('./lib/parse/');
const removeURLTracking = require('./lib/removeURLTracking');

module.exports = {
  getDomain,
  getDomainName,
  getHostName,
  getLinkType,
  isValidIP,
  isValidURI,
  normalize,
  parse,
  removeURLTracking
};
