const URL = require('url');

const isValidURI = require('../isValidURI');
const isValidIP = require('../isValidIP');

/**
 * @function getHostName
 * @description Extracting the hostname from a url is generally easier than parsing the domain.
 * The hostname of a url consists of the entire domain plus sub-domain.
 * We can easily parse this with a regular expression, which looks for everything to the left of the double-slash in a url.
 * We remove the “www” (and associated integers e.g. www2), as this is typically not needed when parsing the hostname from a url
 *
 * @param  {String} url the url we wish to execute its hostname
 * @return {String} the extracted hostname
 */
const getHostName = (url) => {
  const HOSTNAME_INDEX = 2;

  // First, lets check if we have a valid url passed
  if (!!url && isValidURI(url)) {
    const _url = url.trim();

    // Extract the hostname properly from the url provided
    const hostName = URL.parse(_url).hostname;
    const match = hostName.match(/(www[0-9]?\.)?(.[^/:]+)/i);

    if (match !== null && !!match[HOSTNAME_INDEX]) return isValidIP(
        _url.replace(/http:\/\/|https:\/\/|ftp:\/\//, '').replace(/(\/)+$/, '')
      )
        ? _url
            .replace(/http:\/\/|https:\/\/|ftp:\/\//, '')
            .replace(/(\/)+$/, '')
        : match[HOSTNAME_INDEX];

    return _url;
  }

  return false;
};

module.exports = getHostName;
