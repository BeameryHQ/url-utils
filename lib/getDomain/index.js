const domainParser = require("parse-domain");

const isValidURI = require("../isValidURI");
const isValidIP = require("../isValidIP");
const getHostName = require("../getHostname");

/**
 * @function getDomain
 * @description We can extract the domain from a url by leveraging our method for parsing the hostname.
 * Since the above getHostName() method gets us very close to a solution, we just need to remove the sub-domain and clean-up special cases (such as .co.uk)
 *
 * @param  {String} url the url we wish to extract its domain
 * @return {String} the extracted domain
 */
const getDomain = url => {
  let _url;

  // First, lets check if we have a valid url passed
  if (isValidURI(url)) {
    _url = url.replace(/\s\s+/g, "").trim();

    // We will be using the hostname as our base and fallback to the cleaned URI afterwards
    const hostName = getHostName(_url);

    // Check if the hostname is an IPv4 or IPv6 address http://jsfiddle.net/AJEzQ/
    if (isValidIP(hostName))
      return isValidIP(hostName)
        ? hostName
        : _url
            .replace(/http:\/\/|https:\/\/|ftp:\/\//, "")
            .replace(/(\/)+$/, "");

    return domainParser(hostName)
      ? hostName
          .replace(`${domainParser(hostName).subdomain}`, "")
          .replace(/^\./, "")
      : hostName;
  }

  return false;
};

module.exports = getDomain;
