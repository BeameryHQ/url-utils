const transformLinkedinURL = require('linkedin-canonical-url');
const URL = require('url');
const domainParser = require('parse-domain');

const regularExpressions = require('./lib/regex');

const urlUtils = {

  /**
   * @function getCanonicalLinkedinUrl
   * @description LinkedIn urls are "localized" to various markets, this micro-module creates a canonical url from any international one
   *
   * @param  {String} url     the url we wish to extract its domain
   * @return {String}        the canonical Linkedin url
   */
  getCanonicalLinkedinUrl: (url) => {
    if (!!url && urlUtils.isValidURI(url)) return transformLinkedinURL(
        url
          .replace(/\s\s+/g, '')
          .trim()
          .toLowerCase()
      );

    return null;
  },

  /**
   * @function getDomain
   * @description We can extract the domain from a url by leveraging our method for parsing the hostname.
   * Since the above getHostName() method gets us very close to a solution, we just need to remove the sub-domain and clean-up special cases (such as .co.uk)
   *
   * @param  {String} url     the url we wish to extract its domain
   * @return {String} domain  the extracted domain
   */
  getDomain: (_url) => {
    let url = _url;

    // First, lets check if we have a valid url passed
    if (urlUtils.isValidURI(url)) {
      url = url.replace(/\s\s+/g, '').trim();

      // We will be using the hostname as our base and fallback to the cleaned URI afterwards
      const hostName = urlUtils.getHostName(url);

      // Check if the hostname is an IPv4 or IPv6 address http://jsfiddle.net/AJEzQ/
      if (regularExpressions.IPAddresses.test(hostName)) return regularExpressions.IPAddresses.test(hostName)
          ? hostName
          : url
              .replace(/http:\/\/|https:\/\/|ftp:\/\//, '')
              .replace(/(\/)+$/, '');

      return domainParser(hostName)
        ? hostName
            .replace(`${domainParser(hostName).subdomain}`, '')
            .replace(/^\./, '')
        : hostName;
    }

    return null;
  },

  /**
   * @function getDomainName
   * @description Extract the main domain without the .domain notation
   *
   * @param  {String} url     the url we wish to extract its domain
   * @return {String} domain  the extracted domain
   */
  getDomainName: (_url) => {
    let url = _url;

    // First, lets check if we have a valid url passed
    if (!!url && urlUtils.isValidURI(url)) {
      url = url.replace(/\s\s+/g, '').trim();

      const hostName = urlUtils.getHostName(url);
      const domainName = urlUtils.getDomain(url);

      return domainParser(hostName)
        ? domainName.replace(`.${domainParser(hostName).tld}`, '')
        : domainName;
    }

    return null;
  },

  /**
   * @function getHostName
   * @description Extracting the hostname from a url is generally easier than parsing the domain.
   * The hostname of a url consists of the entire domain plus sub-domain.
   * We can easily parse this with a regular expression, which looks for everything to the left of the double-slash in a url.
   * We remove the “www” (and associated integers e.g. www2), as this is typically not needed when parsing the hostname from a url
   *
   * @param  {String} url      the url we wish to execute its hostname
   * @return {String} hostname the extracted hostname
   */
  getHostName: (_url) => {
    let url = _url;
    const MATCHES_LENGTH = 2;

    // First, lets check if we have a valid url passed
    if (!!url && urlUtils.isValidURI(_url)) {
      url = url.replace(/\s\s+/g, '').trim();

      // Extract the hostname properly from the url provided
      const hostName = URL.parse(url).hostname;
      const match = hostName.match(/(www[0-9]?\.)?(.[^/:]+)/i);

      if (
        match !== null &&
        match.length > MATCHES_LENGTH &&
        typeof match[MATCHES_LENGTH] === 'string' &&
        match[MATCHES_LENGTH].length > 0
      ) return regularExpressions.IPAddresses.test(
          url.replace(/http:\/\/|https:\/\/|ftp:\/\//, '').replace(/(\/)+$/, '')
        )
          ? url
              .replace(/http:\/\/|https:\/\/|ftp:\/\//, '')
              .replace(/(\/)+$/, '')
          : match[MATCHES_LENGTH];

      return url;
    }

    return null;
  },

  /**
   * @function getLinkType
   * @description Identify if the link is for a social website
   *
   * @param {String}  source the link URI we wish to examine
   * @returns {String}
   */
  getLinkType: (_source) => {
    let source = _source
      .replace(/\s\s+/g, '')
      .trim()
      .toLowerCase();

    if (!source || typeof source !== 'string') return null;

    if (MESSAGING_SERVICES.find((item) => item.toLowerCase().trim() === source)) return 'messaging';

    // Check if the source is a twitter username
    if (/(^|[^@\w])@(\w{1,15})\b/g.test(source)) source = `http://twitter.com/${source.replace('@', '')}`;

    // Check if the url passed does not contain http://
    if (URL.parse(source).protocol === null) source = `http://${source}`;

    source = urlUtils.getDomain(source) || source;

    return SOCIAL_SERVICES_DOMAIN.includes(source.toLowerCase())
      ? 'social'
      : 'website';
  },

  /**
   * @function isValidURI
   * @description Validate if a passed string is a valid URI according to: https://gist.github.com/dperini/729294
   *
   * @param  {String}  url      the url we wish to execute its hostname
   * @return {Boolean} boolean to indicate if the string is valid URI or not
   */
  isValidURI: (url) => {
    if (url) {
      const URI_REGEX = regularExpressions.URI;
      const isValidURI = URI_REGEX.test(url.replace(/\s\s+/g, '').trim());

      /*
       * Check if the URI provided is a valid IPv4 or IPv6 URI
       * Note: We need to remove the protocol at the beginning HTTP, HTTPS, FTP
       */
      return (
        isValidURI ||
        regularExpressions.IPAddresses.test(
          url.replace(/http:\/\/|https:\/\/|ftp:\/\//, '')
        )
      );
    }

    return false;
  }
};

module.exports = urlUtils;
