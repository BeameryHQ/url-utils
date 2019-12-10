const getDomain = require('../getDomain/');
const normalizeURL = require('../normalize/');
const getDomainName = require('../getDomainName');
const patterns = require('./patterns');

const MESSAGING_SERVICES = require('./data/messaging.json');
const SOCIAL_SERVICES = require('./data/social.json');

/**
 * @function getLinkType
 * @description Identify if the link is for a social website
 *
 * @param {String}  source the link URI we wish to examine
 * @returns {String}
 */
const getLinkType = (url, options = { messaging: {}, social: {} }) => {

  // Check if the user is extending default services lists
  if (options.messaging) MESSAGING_SERVICES.concat(options.messaging);
  if (options.social) SOCIAL_SERVICES.concat(options.social);

  // Check if the source is a twitter username
  const _url = normalizeURL(url);

  if (_url) {
    const domainName = getDomainName(_url);

    if (MESSAGING_SERVICES.find((item) => item.toLowerCase().trim() === _url)) return 'messaging';
    const type = SOCIAL_SERVICES.includes(getDomain(_url).toLowerCase())
      ? 'social'
      : 'website';

    return patterns[domainName]
      ? { pattern: patterns[domainName](_url).type, type }
      : { type };
  }

  return { type: undefined };
};

module.exports = getLinkType;
