const isValidIP = require('../isValidIP');

/*
 * The regular expression composed & commented
 * could be easily tweaked for RFC compliance, it was expressly modified to fit & satisfy these test for an URL shortener:
 * http://mathiasbynens.be/demo/url-regex
 *
 * Notes on possible differences from a standard/generic validation:
 * - utf-8 char class take in consideration the full Unicode range
 * - TLDs have been made mandatory so single names like "localhost" fails
 * - protocols have been restricted to ftp, http and https only as requested
 *
 * Changes:
 * - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
 * first and last IP address of each class is considered invalid
 * (since they are broadcast/network addresses)
 * - Added exclusion of private, reserved and/or local networks ranges
 * - Made starting path slash optional (http://example.com?foo=bar)
 * - Allow a dot (.) at the end of hostnames (http://example.com.)
 * - Allow an underscore (_) character in host/domain names
 * - Check dot delimited parts length and total length
 * - Made protocol optional, allowed short syntax
 */
const URI_REGEX = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

/**
 * @function isValidURI
 * @description Validate if a passed string is a valid URI according to: https://gist.github.com/dperini/729294
 *
 * @param  {String}  url the url we wish to validate
 * @return {Boolean} indication if the string is valid URI or not
 */
const isValidURI = (uri) => {
  if (uri) {
    const isValid = URI_REGEX.test(uri.trim());

    /*
     * Check if the URI provided is a valid IPv4 or IPv6 URI
     * Note: We need to remove the protocol at the beginning HTTP, HTTPS, FTP
     */
    return (
      isValid || isValidIP(uri.replace(/http:\/\/|https:\/\/|ftp:\/\//, ''))
    );
  }

  return false;
};

module.exports = isValidURI;
