
const defaultTrackers = require('./default');
const optionalTrackers = require('./optional');
const facebookTracker = require('./facebook');

module.exports = {
  default:  defaultTrackers,
  optional: optionalTrackers,
  facebook: facebookTracker
}