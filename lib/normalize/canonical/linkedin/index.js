/**
 * @function getCanonicalLinkedinUrl
 * @description LinkedIn urls are "localized" to various markets, this micro-module creates a canonical url from any international one
 *
 * @param  {String} url the url we wish to canonicalise its domain
 * @return {String} the canonical Linkedin url
 */

/* eslint-disable no-magic-numbers */
const getCanonicalLinkedinUrl = (input) => {

  // Detect legacy Linkedin Recruiter accounts that have a different url pattern
  if (input.includes('linkedin.com/recruiter')) return input;

  // Regular expression that validates linkedin url (public profile, recruiter profile and companies)
  const VALIDATION_REGEX = /http(s)?:\/\/([\w]+\.)?linkedin\.com\/(company\/[A-Za-z0-9_-]|in\/[A-z0-9_-]|talent\/[A-z0-9_-])+\/?/g;

  let id;
  let url = input
    .substring(input.indexOf('linkedin'), input.length)
    .split('?')[0];

  const parts = url.split('/detail')[0].split('/');

  if (url.lastIndexOf('/') === url.length - 1) url = url.substring(0, url.length - 1);

  if (parts.length === 4 && parts[3].length === 2) {

    // Shortcut for language
    url = `${parts[0].toLowerCase()}/${parts[1]}/${parts[2]}`;
  } else if (parts.length > 3 && parts[4] !== undefined) {

    // See: http://git.io/vRBcL
    if (parts[4].length === 2) parts[4] = `0${parts[4]}`;

    // See: http://git.io/vRBcL
    if (parts[5].length === 2) parts[5] = `0${parts[5]}`;

    // See: http://git.io/vRBcL
    if (parts[5].length === 1) parts[5] = `00${parts[5]}`;

    id = parts[5] + parts[4] + parts[3];
    url = `${parts[0]}/${parts[1]}/${parts[2]}-${id}`;
  }

  return VALIDATION_REGEX.test(`https://www.${url.replace('pub', 'in')}`)
    ? `https://www.${url.replace('pub', 'in')}`
    : null;
};

module.exports = getCanonicalLinkedinUrl;
