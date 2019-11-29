const transformLinkedinURL = require('linkedin-canonical-url');

/**
 * @function getCanonicalLinkedinUrl
 * @description LinkedIn urls are "localized" to various markets, this micro-module creates a canonical url from any international one
 *
 * @param  {String} url the url we wish to canonicalise its domain
 * @return {String} the canonical Linkedin url
 */
const getCanonicalLinkedinUrl = (url) => transformLinkedinURL(url.trim().toLowerCase());

module.exports = getCanonicalLinkedinUrl;
