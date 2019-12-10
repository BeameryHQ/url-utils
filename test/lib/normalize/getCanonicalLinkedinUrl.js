const assert = require('assert');

const urlUtils = require('../../../index');

describe('Linkedin URL Canonicalization', () => {
  it('should correctly normalize and canonicalize Linkedin urls', () => {
    assert.equal(
      urlUtils.normalize(
        'https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub'
      ), 'https://www.linkedin.com/in/krzysztof-marzec-b50576a7'
    );
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
    assert.equal(
      urlUtils.normalize('https://uk.linkedin.com/pub/abdi-ahmed/100/384/6b0'), 'https://www.linkedin.com/in/abdi-ahmed-6b0384100'
    );
    assert.equal(
      urlUtils.normalize('https://uk.LINKEDIN.com/in/anitaczapla'), 'https://www.linkedin.com/in/anitaczapla'
    );
    assert.equal(
      urlUtils.normalize('https://uk.linkedin.com/pub/benjamin-lees/58/75/162'), 'https://www.linkedin.com/in/benjamin-lees-16207558'
    );
    assert.equal(
      urlUtils.normalize('https://br.linkedin.com/in/jotafeldmann/pt'), 'https://www.linkedin.com/in/jotafeldmann'
    );
    assert.equal(
      urlUtils.normalize(
        'https://ua.linkedin.com/pub/eugene-vegner-%EF%A3%BF/34/4b0/885'
      ), 'https://www.linkedin.com/in/eugene-vegner-%ef%a3%bf-8854b034'
    );
    assert.equal(
      urlUtils.normalize('https://uk.linkedin.com/pub/flavia-lyons/84/772/aa'), 'https://www.linkedin.com/in/flavia-lyons-0aa77284'
    );
    assert.equal(
      urlUtils.normalize('https://www.linkedin.com/pub/hanz-meyer/29/314/b'), 'https://www.linkedin.com/in/hanz-meyer-00b31429'
    );
    assert.equal(
      urlUtils.normalize('https://www.linkedin.com/in/repejota/'), 'https://www.linkedin.com/in/repejota'
    );
  });
});
