const transformLinkedinURL = require('linkedin-canonical-url');

const isValidURI = require('./isValidURI');

/**
 * @function getCanonicalLinkedinUrl
 * @description LinkedIn urls are "localized" to various markets, this micro-module creates a canonical url from any international one
 *
 * @param  {String} url the url we wish to extract its domain
 * @return {String} the canonical Linkedin url
 */
const getCanonicalLinkedinUrl = (url) => {
  if (!!url && isValidURI(url)) return transformLinkedinURL(url.trim().toLowerCase());

  return false;
};

module.exports = getCanonicalLinkedinUrl;
