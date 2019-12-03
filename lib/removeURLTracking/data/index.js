
const defaultTrackers = require('./default');
const optionalTrackers = require('./optional');
const facebookTracker = require('./facebook');
const githubTracker = require('./github');
const instagramTracker = require('./instagram');
const linkedinTracker = require('./linkedin');
const twitterTracker = require('./twitter');

module.exports = {
  default:  defaultTrackers,
  optional: optionalTrackers,
  facebook: facebookTracker,
  github: githubTracker,
  instagram: instagramTracker,
  linkedin: linkedinTracker,
  twitter: twitterTracker
}