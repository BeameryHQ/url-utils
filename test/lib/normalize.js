const assert = require('assert');

const urlUtils = require('../../index');

describe('URL normalize function', () => {
  describe('Canonicalization of links', () => {
    describe('Linkedin URL Canonicalization', () => {
      it('should correctly normalize and canonicalize Linkedin urls', () => {
        assert.equal(
          urlUtils.normalize(
            'http://LINKEDIN.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub'
          ), 'https://www.linkedin.com/in/krzysztof-marzec-b50576a7'
        );
        assert.equal(
          urlUtils.normalize(
            'https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub'
          ), 'https://www.linkedin.com/in/krzysztof-marzec-b50576a7'
        );
      });
    });
  });
});
