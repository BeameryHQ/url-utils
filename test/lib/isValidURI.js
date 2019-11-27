const assert = require('assert');
const { each } = require('lodash');

const urlUtils = require('../../index');

describe('isValidURI function', () => {
  it('should return false<boolean> if no valid URI is passed', () => {
    const URIs = require('../data/URIs.fail.js');

    each(URIs, (URI) => {
      assert.equal(urlUtils.isValidURI(URI), false);
    });
  });
  it('should return true<boolean> if a valid URI is passed', () => {
    const URIs = require('../data/URIs.match.js');

    each(URIs, (URI) => {
      assert.equal(urlUtils.isValidURI(URI.url), true);
    });
  });
});
