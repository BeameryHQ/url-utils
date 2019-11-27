const assert = require('assert');
const { each } = require('lodash');

const urlUtils = require('../../index');

describe('isValidIP function', () => {
  it('should return false<boolean> if no valid IP is passed', () => {
    const IPs = require('../data/IPs.js');

    each(IPs, (IP) => {
      if (!IP[0]) assert.equal(urlUtils.isValidIP(IP[1]), false);
    });
  });
  it('should return true<boolean> if a valid IP is passed', () => {
    const IPs = require('../data/IPs.js');

    each(IPs, (IP) => {
      if (IP[0]) assert.equal(urlUtils.isValidIP(IP[1]), true);
    });
  });
});
