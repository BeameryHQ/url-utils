const assert = require('assert');

const urlUtils = require('../../index');

describe('getLinkType function', () => {
  it('should return a correct link type from a link URI', () => {
    assert.equal(
      urlUtils.getLinkType('http://facebook.com/ahmad.a.assaf'), 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://linkedin.com/in/ahmadassaf'), 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://wwww.linkedin.com/in/ahmadassaf'), 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://twitter.com/ahmadaassaf'), 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://google.com/ahmadaassaf'), 'website'
    );
    assert.equal(urlUtils.getLinkType('https://ahmadassaf.com/'), 'website');
  });

  it('should return a correct link type from a twitter handle', () => {
    assert.equal(urlUtils.getLinkType('@ahmadaassaf'), 'social');
    assert.equal(urlUtils.getLinkType('    @ahmadaassaf   '), 'social');
  });

  it('should return null if no valid url ia provided', () => {
    assert.equal(urlUtils.getLinkType(true), null);
    assert.equal(urlUtils.getLinkType(null), null);
    assert.equal(urlUtils.getLinkType({}), null);
    assert.equal(urlUtils.getLinkType(undefined), null);
  });
});
