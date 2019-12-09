const defaultTrackers = require('./default');
const facebookTracker = require('./facebook');
const githubTracker = require('./github');
const instagramTracker = require('./instagram');
const linkedinTracker = require('./linkedin');
const optionalTrackers = require('./optional');
const twitterTracker = require('./twitter');

module.exports = {
  default: defaultTrackers,
  facebook: facebookTracker,
  github: githubTracker,
  instagram: instagramTracker,
  linkedin: linkedinTracker,
  optional: optionalTrackers,
  twitter: twitterTracker
};
