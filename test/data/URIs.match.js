module.exports = [
    {
        url: "http://foo.com/blah_blah",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://foo.com/blah_blah/",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://foo.com/blah_blah_(wikipedia)",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://foo.com/blah_blah_(wikipedia)_(again)",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://www.example.com/wpstyle/?p=364",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "https://www.example.com/foo/?bar=baz&inga=42&quux",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid:password@example.com:8080",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid:password@example.com:8080/",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid@example.com",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid@example.com/",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid@example.com:8080",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid@example.com:8080/",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid:password@example.com",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://userid:password@example.com/",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://142.42.1.1/",
        hostname: "142.42.1.1",
        domain: "142.42.1.1",
        domainName: "142.42.1.1"
    },
    {
        url: "http://142.42.1.1:8080/",
        hostname: "142.42.1.1",
        domain: "142.42.1.1",
        domainName: "142.42.1.1"
    },
    {
        url: "http://foo.com/blah_(wikipedia)#cite-1",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://foo.com/blah_(wikipedia)_blah#cite-1",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://foo.com/unicode_(✪)_in_parens",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://foo.com/(something)?after=parens",
        hostname: "foo.com",
        domain: "foo.com",
        domainName: "foo"
    },
    {
        url: "http://code.google.com/events/#&product=browser",
        hostname: "code.google.com",
        domain: "google.com",
        domainName: "google"
    },
    {
        url: "http://j.mp",
        hostname: "j.mp",
        domain: "j.mp",
        domainName: "j"
    },
    {
        url: "ftp://foo.co.uk/baz",
        hostname: "foo.co.uk",
        domain: "foo.co.uk",
        domainName: "foo"
    },
    {
        url: "http://foo.co.uk/?q=Test%20URL-encoded%20stuff",
        hostname: "foo.co.uk",
        domain: "foo.co.uk",
        domainName: "foo"
    },
    {
        url: "http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com",
        hostname: "example.com",
        domain: "example.com",
        domainName: "example"
    },
    {
        url: "http://1337.net",
        hostname: "1337.net",
        domain: "1337.net",
        domainName: "1337"
    },
    {
        url: "http://foo.bar.ac.uk",
        hostname: "foo.bar.ac.uk",
        domain: "bar.ac.uk",
        domainName: "bar"
    },
    {
        url: "http://bar.geek.nz",
        hostname: "bar.geek.nz",
        domain: "bar.geek.nz",
        domainName: "bar"
    },
    {
        url: "http://a.b-c.de",
        hostname: "a.b-c.de",
        domain: "b-c.de",
        domainName: "b-c"
    },
    {
        url: "http://github.io/@ahmadassaf",
        hostname: "github.io",
        domain: "github.io",
        domainName: "github"
    },
    {
        url: "http://223.255.255.254",
        hostname: "223.255.255.254",
        domain: "223.255.255.254",
        domainName: "223.255.255.254"
    },
    {
        url: "http://2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        hostname: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        domain: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        domainName: "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
    }
]
