const _ = require('lodash');

/**
 * @function getLinkedinPattern
 * @description getLinkedinPattern returns the type of the linkedin page [profile, recruiter, company]
 *
 * @param {String} url the Facebook URL that we want to canonicalize
 * @returns {String} the type matching the url pattern
 */
function getLinkedinPattern(url) {
  return _.filter(
    [
      {
        regex: /http(s)?:\/\/(www\.)?linkedin\.com\/company\/[A-Za-z0-9_-]+\/?/gm,
        type: 'company'
      },
      {
        regex: /http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/gm,
        type: 'profile'
      },
      {
        regex: /http(s)?:\/\/([\w]+\.)?linkedin\.com\/talent\/[A-z0-9_-]+\/?/gm,
        type: 'recruiter'
      }
    ], (pattern) => pattern.regex.test(url)
  )[0];
}

module.exports = getLinkedinPattern;
