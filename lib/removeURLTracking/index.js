const trackers = require('./data/');
const isValidURI = require('../isValidURI/index');
const getDomainName = require('../getDomainName');

/**
 * @function removeURLTracking
 * @description
 *
 * @param  {String}  url the URL address we wish to strip tracking from
 * @return {String} strippedUrl the URL address after tracker stripping
 */

const removeURLTracking = (url, safeRemoval = true) => {
  if (!!url && isValidURI(url)) {

    // Block all defined global trackers
    const trackersToBlock = [ ...trackers.default ];

    // Block all optional global trackers if unsafe removal requested
    if (!safeRemoval) trackersToBlock.push(...trackers.optional);

    // Block all domain specific trackers if that domain file exists in domainTrackers folder
    const domainName = getDomainName(url);

    if (trackers[domainName]) trackersToBlock.push(...trackers[domainName]);

    // Build regex string separated by pipe (OR)
    const regexString = `([?&](${trackersToBlock.join('|')})=[^&#?]*)`;

    // Replace all matched trackers
    const strippedUrl = url.replaceAll(regexString, '');

    return strippedUrl;
  }

  return false;
};

String.prototype.replaceAll = function(search, replacement) {
  const target = this;

  return target.replace(new RegExp(search, 'g'), replacement);
};

module.exports = removeURLTracking;
