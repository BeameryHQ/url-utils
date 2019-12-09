const getDomain = require('../getDomain/');
const normalizeURL = require('../normalize/');

const MESSAGING_SERVICES = require('./data/messaging.json');
const SOCIAL_SERVICES = require('./data/social.json');

/**
 * @function getLinkType
 * @description Identify if the link is for a social website
 *
 * @param {String}  source the link URI we wish to examine
 * @returns {String}
 */
const getLinkType = (url) => {

  // Check if the source is a twitter username
  const _url = /(^|[^@\w])@(\w{1,15})\b/g.test(url)
    ? normalizeURL(`http://twitter.com/${url.replace('@', '').trim()}`)
    : normalizeURL(url);

  if (_url) {
    if (MESSAGING_SERVICES.find((item) => item.toLowerCase().trim() === _url)) return 'messaging';

    return SOCIAL_SERVICES.includes(getDomain(_url).toLowerCase())
      ? 'social'
      : 'website';
  }

  return null;
};

module.exports = getLinkType;
