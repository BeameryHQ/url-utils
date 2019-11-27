const assert = require('assert');
const { each } = require('lodash');

const urlUtils = require('../../index');

describe('getDomainName function', () => {
  it('should return the correct domainName for a valid URI', () => {
    const URIs = require('../data/URIs.match.js');

    each(URIs, (URI) => {
      assert.equal(urlUtils.getDomainName(URI.url), URI.domainName);
    });
  });
});
