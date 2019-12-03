const assert = require('assert');

const urlUtils = require('../../index');

describe('removeURLTracking function', () => {
  
  it('should return false for an invalid URI', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://'
      ), false
    );
  });

  it('should return original URI if there are no tracking parameters', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/article/page_title'
      ), 'https://foo.com/article/page_title'
    );
  });

  it('should be able to remove a single tracking component of a given URI', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?utm_campaign=f4c93d76a953'
      ), 'https://foo.com/page_title'
    );
  });

  it('should remove multiple different tracking components of a given URI', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?utm_campaign=f4c93d76a953?fbclid=092c4759?ga_campaign=f4c93d76a953'
      ), 'https://foo.com/page_title'
    );
  });

  it('should remove multiple different tracking components of a given URI, which are joined using either "?" or "&"', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?utm_campaign=f4c93d76a953&fbclid=092c4759?ga_campaign=f4c93d76a953'
      ), 'https://foo.com/page_title'
    );
  });

  it('should remove only tracking parameters and leave valid parameters untouched', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?utm_campaign=f4c93d76a953?user_id=foo'
      ), 'https://foo.com/page_title?user_id=foo'
    );
  });

  it('should not remove unsafe tracking parameters if safe=true (default)', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?assetId=f4c93d76a953'
      ), 'https://foo.com/page_title?assetId=f4c93d76a953'
    );
  });

  it('should remove unsafe tracking parameters if safe=false', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?assetId=f4c93d76a953',
        false
      ), 'https://foo.com/page_title'
    );
  });

  it('should remove unsafe tracking parameters if safe=false', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?assetId=f4c93d76a953',
        false
      ), 'https://foo.com/page_title'
    );
  });

  it('should remove domain-specific tracking parameters', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://facebook.com/page_title?comment_tracking=f4c93d76a953'
      ), 'https://facebook.com/page_title'
    );
  });

  it('should not remove domain-specific tracking parameters if domain file does not exist', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://foo.com/page_title?comment_tracking=failing'
      ), 'https://foo.com/page_title?comment_tracking=failing'
    );
  });

  it('should remove both global and domain-specific parameters', () => {
    assert.equal(
      urlUtils.removeURLTracking(
        'https://instagram.com/page_title?igshid=f4c93d76a953?utm_campaign=092c4759'
      ), 'https://instagram.com/page_title'
    );
  });

});
