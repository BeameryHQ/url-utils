const assert = require('assert');

const urlUtils = require('../index');

describe('urlUtils helper', () => {
  describe('should fail if no URI is passed', () => {
    it('should fail if no URI is passed to isValidURI', () => {
      assert.equal(urlUtils.isValidURI(), false);
    });
    it('should fail if no URI is passed to getHostName', () => {
      assert.equal(urlUtils.getHostName(), false);
    });
    it('should fail if no URI is passed to getDomain', () => {
      assert.equal(urlUtils.getDomain(), false);
    });
    it('should fail if no URI is passed to getDomainName', () => {
      assert.equal(urlUtils.getDomainName(), false);
    });
    it('should fail if no URI is passed to getCanonicalLinkedinUrl', () => {
      assert.equal(urlUtils.normalize(), false);
    });
  });

  describe('should return false if no valid URI was passed', () => {
    it('should return false if no valid URI was passed to getHostName', () => {
      assert.equal(urlUtils.getHostName('http:// shouldfail.com'), false);
    });
    it('should return false if no valid URI was passed to getDomain', () => {
      assert.equal(urlUtils.getDomain('http:// shouldfail.com'), false);
    });
    it('should return false if no valid URI was passed to getDomainName', () => {
      assert.equal(urlUtils.getDomainName('http:// shouldfail.com'), false);
    });
    it('should return false if no valid URI was passed to getCanonicalLinkedinUrl', () => {
      assert.equal(urlUtils.normalize('http:// shouldfail.com'), false);
    });
  });
});

require('./lib/normalize');
require('./lib/getDomain');
require('./lib/getDomainName');
require('./lib/getHostname');
require('./lib/isValidURI');
require('./lib/isValidIP');
