/**
 * @function getCanonicalTwitterUrl
 * @description getCanonicalTwitterUrl takes a Twitter URL and extracts the key identifier (username)
 * and generates a new standardised URL for that identifier. If the URL did not match a defined pattern, the same URL is returned
 *
 * @param {String} url the Twitter URL that we want to canonicalize
 * @returns {Boolean} match success and the standardised URL is returned if it matched the Twitter extraction pattern
 */

function getCanonicalTwitterUrl(url) {

  // Regex pattern to confirm and classify social media platform
  const VALIDATION_REGEX = /(?:https?:\/\/)?(?:www.)?(?:mobile.)?twitter\.com\/(\w){1,15}/;

  if (VALIDATION_REGEX.test(url)) {
    const userHandle = url.match(VALIDATION_REGEX)[1];

    return `https://twitter.com/${userHandle}`;
  }

  return null;
}

module.exports = getCanonicalTwitterUrl;
