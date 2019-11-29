const isValidURI = require('./isValidURI');

/**
 * @function removeURLTracking
 * @description 
 *
 * @param  {String}  url the URL address we wish to strip tracking from
 * @return {String} strippedUrl the URL address after tracker stripping
 */

const removeURLTracking = (url) => {

  if (!!url && isValidURI(url)) {

    const TRACKING_REGEX = /([?&](icid|mkt_tok|(g|fb)clid|_hs(enc|mi)|mc_[ce]id|utm_(source|medium|term|campaign|content|cid|reader|referrer|name|social|social-type))=[^&#]*)/;
    
    var strippedUrl = url.replaceAll(TRACKING_REGEX, '');
    
    return strippedUrl;
  }
};

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

module.exports = removeURLTracking;
