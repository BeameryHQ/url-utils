const normalizeUrl = require('normalize-url');

const canonical = require('./canonical');
const isValidURI = require('../isValidURI');
const getDomainName = require('../getDomainName/');
const removeURLTracking = require('../removeURLTracking/');

/**
 * @function normalize
 * @description normalize and canonicalise urls including data URL
 * The function first normalize the url by performing various steps from lower-casing to encoding
 * The function then strips any url trackers and paddings in the url
 * The function tries to canonicalise the url if possible based on configurations depending on the domain name
 *
 *
 * @param  {String} url the url we wish to normalize
 * @return {String} the normalized and canonical url
 */
const normalize = (url) => {

  // Check if the url passed is a twitter username and normalize that to a proper URL
  let _url = /(^|[^@\w])@(\w{1,15})\b/g.test(url)
    ? `http://twitter.com/${url.replace('@', '').trim()}`
    : url;

  if (isValidURI(_url)) {
    _url = normalizeUrl(decodeURI(_url.trim()), {
      forceHttp: true,
      removeDirectoryIndex: true
    }).toLowerCase();

    const domainName = getDomainName(_url);

    return canonical[domainName]
      ? removeURLTracking(canonical[domainName](_url))
      : removeURLTracking(_url);
  }

  return false;
};

module.exports = normalize;
