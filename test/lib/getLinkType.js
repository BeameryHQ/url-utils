const assert = require('assert');

const urlUtils = require('../../index');

describe('getLinkType function', () => {
  it('should return a correct link type from a link URI', () => {
    assert.equal(
      urlUtils.getLinkType('http://facebook.com/ahmad.a.assaf').type, 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://linkedin.com/in/ahmadassaf').type, 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://wwww.linkedin.com/in/ahmadassaf').type, 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://twitter.com/ahmadaassaf').type, 'social'
    );
    assert.equal(
      urlUtils.getLinkType('https://google.com/ahmadaassaf').type, 'website'
    );
    assert.equal(
      urlUtils.getLinkType('https://ahmadassaf.com/').type, 'website'
    );
  });

  it('should return a correct link type from a twitter handle', () => {
    assert.equal(urlUtils.getLinkType('@ahmadaassaf').type, 'social');
    assert.equal(urlUtils.getLinkType('    @ahmadaassaf   ').type, 'social');
  });

  describe('getLinkType url pattern recognition', () => {
    it('should return a correct link pattern for a linkedin profile', () => {
      assert.equal(
        urlUtils.getLinkType('https://wwww.linkedin.com/in/ahmadassaf').pattern, 'profile'
      );
      assert.equal(
        urlUtils.getLinkType(
          'http://LINKEDIN.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub'
        ).pattern, 'profile'
      );
    });
    it('should return a correct link pattern for a linkedin company page', () => {
      assert.equal(
        urlUtils.getLinkType(
          'https://www.linkedin.com/company/universite-jean-monnet-saint-etienne/about/'
        ).pattern, 'company'
      );
      assert.equal(
        urlUtils.getLinkType('https://www.linkedin.com/company/google/')
          .pattern, 'company'
      );
    });

    it('should return a correct link pattern for a linkedin recruiter profile', () => {
      assert.equal(
        urlUtils.getLinkType(
          'https://www.linkedin.com/talent/profile/AEMAAAzCOfUBK9-Sbg_sc7ken4szsE98fV-QgWM'
        ).pattern, 'recruiter'
      );
      assert.equal(
        urlUtils.getLinkType(
          'https://www.linkedin.com/talent/hire/312364978/manage/all/profile/AEMAAAK2xbUBe7egSB6fj0w-WFrvWkbFirpW6d0?project=312364978'
        ).pattern, 'recruiter'
      );
    });
  });

  it('should return null if no valid url ia provided', () => {
    assert.equal(urlUtils.getLinkType(true).type, null);
    assert.equal(urlUtils.getLinkType(null).type, null);
    assert.equal(urlUtils.getLinkType({}).type, null);
    assert.equal(urlUtils.getLinkType(undefined).type, null);
  });
});
