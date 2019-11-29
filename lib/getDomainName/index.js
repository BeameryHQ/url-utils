const domainParser = require('parse-domain');

const isValidURI = require('../isValidURI');
const getHostName = require('../getHostname');
const getDomain = require('../getDomain');

/**
 * @function getDomainName
 * @description Extract the main domain without the .domain notation
 *
 * @param  {String} url the url we wish to extract its domain
 * @return {String} the extracted domain
 */
const getDomainName = (url) => {

  // First, lets check if we have a valid url passed
  if (!!url && isValidURI(url)) {
    const _url = url.replace(/\s\s+/g, '').trim();

    const hostName = getHostName(_url);
    const domainName = getDomain(_url);

    return domainParser(hostName)
      ? domainName.replace(`.${domainParser(hostName).tld}`, '')
      : domainName;
  }

  return false;
};

module.exports = getDomainName;
