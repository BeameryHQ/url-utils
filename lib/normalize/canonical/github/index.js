/**
 * @function getCanonicalGithubUrl
 * @description getCanonicalGithubUrl takes a Github URL and validates it
 *
 * @param {String} url the Github URL that we want to canonicalize
 * @returns {Boolean} match success and the standardised URL is returned if it matched the Github extraction pattern
 */

function getCanonicalGithubUrl(url) {

  // Regex pattern to confirm and classify social media platform
  const VALIDATION_REGEX = /http(s)?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?/gm;

  return VALIDATION_REGEX.test(url) ? url : null;
}

module.exports = getCanonicalGithubUrl;
