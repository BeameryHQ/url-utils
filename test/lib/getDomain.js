const assert = require('assert');
const { each } = require('lodash');

const urlUtils = require('../../index');

describe('getDomain function', () => {
  it('should return the correct domain for a valid URI', () => {
    const URIs = require('../data/URIs.match.js');

    each(URIs, (URI) => {
      assert.equal(urlUtils.getDomain(URI.url), URI.domain);
    });
  });
});
