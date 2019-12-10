const URL = require('url-parse');
const parseDomain = require('parse-domain');

const getHostname = require('../getHostname');
const getDomainName = require('../getDomainName');
const getDomain = require('../getDomain');
const getLinkType = require('../getLinkType');
const normalize = require('../normalize');

/**
 * @function parse
 * @description Parses a valid URI into its subparts
 *
 * @param  {String}  url the URL address we wish to parse
 * @return {Object} the parsed url
 */
const parse = (uri) => {
  const _uri = URL(uri);
  const _parsedUri = parseDomain(uri);

  _uri.hostname = getHostname(uri);
  _uri.domainName = getDomainName(uri);
  _uri.domain = getDomain(uri);
  _uri.tld = _parsedUri.tld;
  _uri.type = getLinkType(uri);
  _uri.normalizedUrl = normalize(uri);

  if (_parsedUri.subdomain.length) _uri.subdomain = _parsedUri.subdomain;

  return _uri;
};

module.exports = parse;
