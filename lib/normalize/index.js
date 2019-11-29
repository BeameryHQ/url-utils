const normalizeUrl = require('normalize-url');

const canonical = require('./canonical');
const isValidURI = require('../isValidURI');
const getDomainName = require('../getDomainName/');

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
  if (!!url && isValidURI(url)) {
    const _url = normalizeUrl(url, {
      forceHttp: true,
      removeDirectoryIndex: true
    });
    const _domainName = getDomainName(url);

    return canonical[_domainName] ? canonical[_domainName](_url) : _url;
  }

  return false;
};

module.exports = normalize;
