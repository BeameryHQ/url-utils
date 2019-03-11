'use strict';

const transform_linkedin_url = require('linkedin-canonical-url');
const URL                    = require('url');
const domainParser           = require('parse-domain');

const regularExpressions     = require('./configs');

var urlUtils = {

    /**
    * @function isValidURI
    * @description Validate if a passed string is a valud URI according to: https://gist.github.com/dperini/729294
    *
    * @param  {String}  url      the url we wish to execute its hostname
    * @return {Boolean} boolean to indicate if the string is valid URI or not
    */
    isValidURI: function isValidURI(url) {

    	if (!!url) {

	        const URI_REGEX = regularExpressions.URI;
	        let isValidURI  = URI_REGEX.test(url.replace(/\s\s+/g,"").trim());

	        // Check if the URI provided is a valid IPv4 or IPv6 URI
	        // Note: We need to remove the protocol at the beginning HTTP, HTTPS, FTP
	        return isValidURI || regularExpressions.IPAddresses.test(url.replace(/http:\/\/|https:\/\/|ftp:\/\//, ''));

    	} else return false;
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
    getHostName: function getHostName(url) {

        // First, lets check if we have a valid url passed
        if (!!url && urlUtils.isValidURI(url)) {

        	url = url.replace(/\s\s+/g,"").trim();

            // Extract the hostname properly from the url provided
            let hostName  = URL.parse(url).hostname;
            let match     = hostName.match(/(www[0-9]?\.)?(.[^/:]+)/i);

            if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
                return regularExpressions.IPAddresses.test(url.replace(/http:\/\/|https:\/\/|ftp:\/\//, '').replace(/(\/)+$/, '')) ?
                  url.replace(/http:\/\/|https:\/\/|ftp:\/\//, '').replace(/(\/)+$/, ''): match[2];
            } else return url;

        } else return null;
    },

   /**
    * @function getDomain
    * @description We can extract the domain from a url by leveraging our method for parsing the hostname.
    * Since the above getHostName() method gets us very close to a solution, we just need to remove the sub-domain and clean-up special cases (such as .co.uk)
    *
    * @param  {String} url     the url we wish to extract its domain
    * @return {String} domain  the extracted domain
    */
    getDomain: function getDomain(url) {

        // First, lets check if we have a valid url passed
        if (urlUtils.isValidURI(url)) {

        	url = url.replace(/\s\s+/g,"").trim();
            // We will be using the hostname as our base and fallback to the cleaned URI afterwards
            let hostName = urlUtils.getHostName(url);

            // check if the hostname is an IPv4 or IPv6 address http://jsfiddle.net/AJEzQ/
            if (regularExpressions.IPAddresses.test(hostName)) {
                return regularExpressions.IPAddresses.test(hostName) ? hostName : url.replace(/http:\/\/|https:\/\/|ftp:\/\//, '').replace(/(\/)+$/, '');
            } else return !!domainParser(hostName) ? hostName.replace(`${domainParser(hostName).subdomain}`, '').replace(/^\./, "") : hostName;

        } else return null;
    },

   /**
    * @function getDomainName
    * @description Extract the main domain without the .domain notation
    *
    * @param  {String} url     the url we wish to extract its domain
    * @return {String} domain  the extracted domain
    */
    getDomainName: function getDomainName(url) {

        // First, lets check if we have a valid url passed
        if (!!url && urlUtils.isValidURI(url)) {

        	url = url.replace(/\s\s+/g,"").trim();

          let hostName = urlUtils.getHostName(url);
          let domainName = urlUtils.getDomain(url);

          return !!domainParser(hostName) ? domainName.replace(`.${domainParser(hostName).tld}`, '') : domainName;

        } else return null;
    },

   /**
    * @function getCanonicalLinkedinUrl
    * @description LinkedIn urls are "localized" to various markets, this micro-module creates a canonical url from any international one
    *
    * @param  {String} url     the url we wish to extract its domain
    * @return {String}        the canonical Linkedin url
    */
    getCanonicalLinkedinUrl: function getCanonicalLinkedinUrl(url) {

        return !!url && urlUtils.isValidURI(url) ? transform_linkedin_url(url.replace(/\s\s+/g,"").trim().toLowerCase()) : null;
    }
}

module.exports  = urlUtils;
