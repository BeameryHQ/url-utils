const URL = require('url-parse');
const parseDomain = require('parse-domain');

const getHostname = require('../getHostname');
const getDomainName = require('../getDomainName');
const getDomain = require('../getDomain');

const parse = (uri) => {
  const _uri = URL(uri);
  const _parsedUri = parseDomain(uri);

  _uri.hostname = getHostname(uri);
  _uri.domainName = getDomainName(uri);
  _uri.domain = getDomain(uri);
  _uri.tld = _parsedUri.tld;

  if (_parsedUri.subdomain.length) _uri.subdomain = _parsedUri.subdomain;

  return _uri;
};

module.exports = parse;
