/**
 * @function getLinkType
 * @description Identify if the link is for a social website
 *
 * @param {String}  source the link URI we wish to examine
 * @returns {String}
 */
const getLinkType = (source) => {
  let _source = (source = source.trim().toLowerCase());

  if (!_source || typeof _source !== 'string') return null;

  if (MESSAGING_SERVICES.find((item) => item.toLowerCase().trim() === _source)) return 'messaging';

  // Check if the source is a twitter username
  if (/(^|[^@\w])@(\w{1,15})\b/g.test(source)) _source = `http://twitter.com/${_source.replace('@', '')}`;

  // Check if the url passed does not contain http://
  if (URL.parse(_source).protocol === null) _source = `http://${_source}`;

  _source = urlUtils.getDomain(_source) || _source;

  return SOCIAL_SERVICES_DOMAIN.includes(_source.toLowerCase())
    ? 'social'
    : 'website';
};

module.exports = getLinkType;
