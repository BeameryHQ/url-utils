const _ = require('lodash');
const assert = require('assert');

const urlUtils = require('../index');

/*
 * Console.log(
 *   urlUtils.parseURI(
 *     'https://user:password@example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument'
 *   )
 * );
 */
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
      assert.equal(urlUtils.getCanonicalLinkedinUrl(), false);
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
      assert.equal(
        urlUtils.getCanonicalLinkedinUrl('http:// shouldfail.com'), false
      );
    });
  });

  describe('isValidURI fuction', () => {
    it('should return false<boolean> if no valid URI is passed', () => {
      const URIs = require('./data/URIs.fail.js');

      _.each(URIs, (URI) => {
        assert.equal(urlUtils.isValidURI(URI), false);
      });
    });
    it('should return true<boolean> if a valid URI is passed', () => {
      const URIs = require('./data/URIs.match.js');

      _.each(URIs, (URI) => {
        assert.equal(urlUtils.isValidURI(URI.url), true);
      });
    });
  });

  describe('getHostName function', () => {
    it('should return the correct hostname for a valid URI', () => {
      const URIs = require('./data/URIs.match.js');

      _.each(URIs, (URI) => {
        assert.equal(urlUtils.getHostName(URI.url), URI.hostname);
      });
    });
  });

  describe('getDomain function', () => {
    it('should return the correct domain for a valid URI', () => {
      const URIs = require('./data/URIs.match.js');

      _.each(URIs, (URI) => {
        assert.equal(urlUtils.getDomain(URI.url), URI.domain);
      });
    });
  });

  describe('getDomainName function', () => {
    it('should return the correct domainName for a valid URI', () => {
      const URIs = require('./data/URIs.match.js');

      _.each(URIs, (URI) => {
        assert.equal(urlUtils.getDomainName(URI.url), URI.domainName);
      });
    });
  });

  describe('getCanonicalLinkedinUrl function', () => {
    it('should correctly call the linkedin-canonical-url', () => {
      assert.equal(
        urlUtils.getCanonicalLinkedinUrl(
          'http://LINKEDIN.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub'
        ), 'https://www.linkedin.com/in/krzysztof-marzec-b50576a7'
      );
      assert.equal(
        urlUtils.getCanonicalLinkedinUrl(
          'https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub'
        ), 'https://www.linkedin.com/in/krzysztof-marzec-b50576a7'
      );
    });
  });
});
