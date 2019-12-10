/**
 * @function getCanonicalInstagramUrl
 * @description getCanonicalInstagramUrl takes a Instagram URL and validates it
 *
 * @param {String} url the Instagram URL that we want to canonicalize
 * @returns {Boolean} match success and the standardised URL is returned if it matched the Instagram extraction pattern
 */

function getCanonicalInstagramUrl(url) {

  // Regex pattern to confirm and classify social media platform
  const VALIDATION_REGEX = /https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/gm;

  return VALIDATION_REGEX.test(url) ? url : null;
}

module.exports = getCanonicalInstagramUrl;
