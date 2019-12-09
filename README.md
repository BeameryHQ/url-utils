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

<a name="getDomain"></a>

## getDomain(url) ⇒ <code>String</code>

We can extract the domain from a url by leveraging our method for parsing the hostname.
Since the above getHostName() method gets us very close to a solution, we just need to remove the sub-domain and clean-up special cases (such as .co.uk)

**Returns**: <code>String</code> - the extracted domain

<a name="getDomainName"></a>

## getDomainName(url) ⇒ <code>String</code>

Extract the main domain without the .domain notation

**Returns**: <code>String</code> - the extracted domain

<a name="getHostName"></a>

## getHostName(url) ⇒ <code>String</code>

Extracting the hostname from a url is generally easier than parsing the domain.
The hostname of a url consists of the entire domain plus sub-domain.
We can easily parse this with a regular expression, which looks for everything to the left of the double-slash in a url.
We remove the “www” (and associated integers e.g. www2), as this is typically not needed when parsing the hostname from a url

**Returns**: <code>String</code> - the extracted hostname

<a name="getLinkType"></a>

## getLinkType(source) ⇒ <code>String</code>

Identify if the link is for a social website

**Kind**: global function

## isValidIP(ip) ⇒ <code>Boolean</code>

Validate if a passed string is a valid IP according to: http://jsfiddle.net/AJEzQ/

**Returns**: <code>Boolean</code> - indication if the string is valid URI or not

<a name="isValidURI"></a>

## isValidURI(url) ⇒ <code>Boolean</code>

Validate if a passed string is a valid URI according to: https://gist.github.com/dperini/729294

**Returns**: <code>Boolean</code> - indication if the string is valid URI or not

<a name="normalize"></a>

## normalize(url) ⇒ <code>String</code>

normalize and canonicalise urls including data URL
The function first normalize the url by performing various steps from lower-casing to encoding
The function then strips any url trackers and paddings in the url
The function tries to canonicalise the url if possible based on configurations depending on the domain name

**Returns**: <code>String</code> - the normalized and canonical url

<a name="removeURLTracking"></a>

## removeURLTracking(url) ⇒ <code>String</code>

removes tracking query parameters from the url

**Returns**: <code>String</code> - strippedUrl the URL address after tracker stripping

<a name="parse"></a>

## parse(url) ⇒ <code>Object</code>

Parses a valid URI into its subparts

**Returns**: <code>Object</code> - the parsed url

# References

- [In search of the perfect URL validation regex](https://mathiasbynens.be/demo/url-regex)
- [uri-js](https://github.com/garycourt/uri-js): An RFC 3986 compliant, scheme extendable URI parsing/validating/normalizing/resolving library for JavaScript
- [regex-weburl](https://gist.github.com/dperini/729294): Regular Expression for URL validation
- [parse-domain](https://github.com/peerigon/parse-domain): Splits a URL into sub-domain, domain and the top-level domain. Provides TypeScript typings
- [normalize-url](https://github.com/sindresorhus/normalize-url): Normalize a URL
