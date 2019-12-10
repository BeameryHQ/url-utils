# getCanonicalLinkedinUrl

LinkedIn urls are "_localized_" to various markets,
this micro-module creates a canonical url from any international one.

## Why?

It _can_ appear that a single person has multiple possible URLs and therefore its possible to have duplicate profiles. We don't like duplicate data. So we need a way of transforming the URL for any "local" version of LinkedIn into its "**_canonical_**" (_unique_) version.

## What?

Given an international LinkedIn URL such as:  
`https://uk.linkedin.com/in/john-smith-82a505`
into the canonical version:
`https://www.linkedin.com/in/john-smith-82a505`

This is a relatively _simple_ example. The interesting one is where
LinkedIn appends _noise_ in the url e.g:  
`https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub`
Which gets re-directed to:  
`https://www.linkedin.com/in/krzysztof-marzec-b50576a7`

_Thankfully_ there _is_ a **_pattern_** so we can transform the urls.

## How?

```sh
npm install beam-uri --save
```

Then in your script:

```js
import { normalize } from "beam-uri";
var local_url =
  "https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub";
var canonical_url = normalize(local_url);
console.log("Transformed: ", canonical_url);
// https://www.linkedin.com/in/krzysztof-marzec-b50576a7
```

That's it.  
Now each time you see a LinkedIn URL pass it through this transformer
to ensure that you are getting the **_canonical_** version.

> **Note**: the transformer is written to be human-readable.
> If you run into a "_performance-bottleneck_" using this code,
> please feel free to submit a PR to make it faster.

## References

- [linkedin-canonical-url](https://github.com/BeameryHQ/linkedin-canonical-url)
