const assert = require('assert');

const urlUtils = require('../../index');

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
