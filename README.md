# URI Swiss Army Knife Utilities

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