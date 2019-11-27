const assert = require('assert');
const { each } = require('lodash');

const urlUtils = require('../../index');

describe('getHostName function', () => {
  it('should return the correct hostname for a valid URI', () => {
    const URIs = require('../data/URIs.match.js');

    each(URIs, (URI) => {
      assert.equal(urlUtils.getHostName(URI.url), URI.hostname);
    });
  });
});
