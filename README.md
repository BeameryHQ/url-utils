# URI Swiss Army Knife Utilities

## URL Validation

A complete definition of what constitutes a valid URL can be found in [RFC 3986](http://tools.ietf.org/html/rfc3986) and [RFC 3987](http://tools.ietf.org/html/rfc3987). The short version is that a valid URL must, at minimum, consist of a scheme (`https://`, `http://ftp://`, `http://gopher://`) and a host name. If it does not, validation should fail, and the browser should throw an error.

A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components.

The Node.js `url` module provides two APIs for working with URLs: a legacy API that is Node.js specific, and a newer API that implements the same `WHATWG` URL [Standard](https://url.spec.whatwg.org/) used by web browsers.

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(all spaces in the "" line should be ignored — they are purely for formatting)
```

<dl>
<dt><a href="helpers/README.md#isValidURI">isValidURI(url)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Validate if a passed string is a valud URI according to: <a href="https://gist.github.com/dperini/729294">https://gist.github.com/dperini/729294</a></p>
</dd>
<dt><a href="helpers/README.md#getHostName">getHostName(url)</a> ⇒ <code>String</code></dt>
<dd><p>Extracting the hostname from a url is generally easier than parsing the domain.
The hostname of a url consists of the entire domain plus sub-domain.
We can easily parse this with a regular expression, which looks for everything to the left of the double-slash in a url.
We remove the “www” (and associated integers e.g. www2), as this is typically not needed when parsing the hostname from a url</p>
</dd>
<dt><a href="helpers/README.md#getDomain">getDomain(url)</a> ⇒ <code>String</code></dt>
<dd><p>We can extract the domain from a url by leveraging our method for parsing the hostname.
Since the above getHostName() method gets us very close to a solution, we just need to remove the sub-domain and clean-up special cases (such as .co.uk)</p>
</dd>
<dt><a href="helpers/README.md#getDomainName">getDomainName(url)</a> ⇒ <code>String</code></dt>
<dd><p>Extract the main domain without the .domain notation</p>
</dd>
<dt><a href="helpers/README.md#getCanonicalLinkedinUrl">getCanonicalLinkedinUrl(url)</a> ⇒ <code>String</code></dt>
<dd><p>LinkedIn urls are &quot;localized&quot; to various markets, this micro-module creates a canonical url from any international one</p>
</dd>
</dl>

# References

- [In search of the perfect URL validation regex](https://mathiasbynens.be/demo/url-regex)
- [uri-js](https://github.com/garycourt/uri-js): An RFC 3986 compliant, scheme extendable URI parsing/validating/normalizing/resolving library for JavaScript
- [regex-weburl](https://gist.github.com/dperini/729294): Regular Expression for URL validation
- [parse-domain](https://github.com/peerigon/parse-domain): Splits a URL into sub-domain, domain and the top-level domain. Provides TypeScript typings
- [normalize-url](https://github.com/sindresorhus/normalize-url): Normalize a URL
