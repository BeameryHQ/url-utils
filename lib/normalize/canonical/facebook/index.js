/**
 * @function getCanonicalFacebookUrl
 * @description getCanonicalFacebookUrl takes a Facebook URL and extracts the key identifier (e.g. userID, username, pageID)
 * and generates a new standardised URL for that identifier. If the URL did not match a defined pattern, the same URL is returned
 *
 * @param {String} url the Facebook URL that we want to canonicalize
 * @returns {Boolean} match success and the standardised URL is returned if it matched the Facebook extraction pattern
 */

/*
 * No internationalisation in facebook URLs
 * Structures seen:
 * no\ facebook.com/abc != facebook.com/pages/abc
 * bounce_page#!/ can be removed
 * notes/ is a specific blog style post, can't be removed
 * home.php? no ID given for mobile, bad link
 * remove whatever noise &gt=01201
 * replace fbme and m.facebook and mbasic.facebook
 */

/*
 * (?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?
 * (?:https?:\/\/)?(?:www\.)?(?:mbasic.facebook|m\.facebook|facebook|fb)\.(?:com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)
 * (?:https?:\/\/)?(?:www\.|m\.|touch\.)?(?:facebook\.com|fb(?:\.me|\.com))\/(?!$)(?:(?:\w)*#!\/)?(?:pages\/)?(?:photo\.php\?fbid=)?(?:[\w\-]*\/)*?(?:\/)?(?:profile\.php\?id=)?([^\/?\s]*)(?:\/|&|\?)?.*$
 */

function getCanonicalFacebookUrl(url) {
  const VALIDATION_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:mbasic.facebook|m\.facebook|facebook|fb)\.(?:com|me)\/(?:home\.php)?(.+)/;

  if (VALIDATION_REGEX.test(url)) {
    let urlSubPart = url.match(VALIDATION_REGEX)[1];

    urlSubPart = urlSubPart.replace('bounce_page#!/', '').replace('#!/', '');

    return `https://www.facebook.com/${urlSubPart}`;
  }

  return null;
}

module.exports = getCanonicalFacebookUrl;
