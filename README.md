# Global Util Plugins and Helpers

The main goal of this repo is to act as a centralized hub for the most common used libs across our APIs and their plugins. By doing so, we minimize the footprint of those
modules and have a centralized place up update those dependencies. In addition, this repo contains a set of helper functions that are used in the various APIs and plugins.

## Shared External Libs

| Module                                     | Version   | Description                                                                                                              |
| ----------                                 | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| [async](https://github.com/caolan/async)   | ^2.1.2    | Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript   |
| [lodash](https://lodash.com/)              | ^4.16.6   | A modern JavaScript utility library delivering modularity, performance & extras                                          |
| [joi](https://github.com/hapijs/joi)       | ^9.2.0    | Object schema description language and validator for JavaScript objects                                                  |
| [moment](http://momentjs.com/)             | ^2.15.2   | Parse, validate, manipulate, and display dates in JavaScript                                                             |
| [ramda](https://github.com/CrossEye/ramda) | ^0.22.1   | A practical functional library for JavaScript programmers                                                                |
| [highland](http://highlandjs.org/)         | ^2.10.1   | The high-level streams library for Node.js and the browser                                                               |
| [debug](https://github.com/visionmedia/debug)         | ^2.2.0  | Tiny node.js debugging utility modelled after node core's debugging technique


# Helper Functions

## ID Generator

<dl>
<dt><a href="helpers/README.md#generateId">generateId(input)</a> ⇒ <code>string</code></dt>
<dd><p>generate an id by creating an md5 hash from a pased string</p>
</dd>
<dt><a href="helpers/README.md#generateUUID">generateUUID()</a> ⇒ <code>string</code></dt>
<dd><p>generate a random UUID
A Version 4 UUID is a universally unique identifier that is generated using random numbers. The Version 4 UUIDs produced by this site were generated using a secure random number generator.</p>
</dd>
<dt><a href="helpers/README.md#generateMongoObjectId">generateMongoObjectId()</a> ⇒ <code>String</code></dt>
<dd><p>Generate a new ObjectId value. The 12-byte ObjectId value consists of:</p>
<ul>
<li>4-byte value representing the seconds since the Unix epoch,</li>
<li>3-byte machine identifier,</li>
<li>2-byte process id, and</li>
<li>3-byte counter, starting with a random value.</li>
</ul>
</dd>
<dt><a href="helpers/README.md#generateShortId">generateShortId()</a> ⇒ <code>String</code></dt>
<dd><p>Generate a shortId using the NPM shortId module
ShortId creates amazingly short non-sequential url-friendly unique ids. Perfect for url shorteners, MongoDB and Redis ids.
By default 7-14 url-friendly characters: A-Z, a-z, 0-9, _-
Non-sequential so they are not predictable.
Supports cluster (automatically), custom seeds, custom alphabet.</p>
</dd>
</dl>

---

## API Response Formatters

<dl>
<dt><a href="helpers/README.md#formatAPIOutputByIds">formatAPIOutputByIds(request, entityType, ids)</a></dt>
<dd><p>The responses from the API need be in the form of:</p>
<pre><code>    {
    &quot;results&quot; : [&quot;c1a1738648ecda410dc3a0dbbb3be683&quot;, &quot;401b2f4c267d2ffdd34c379060d97ddc&quot;],
    &quot;entities&quot;: {
      &quot;c1a1738648ecda410dc3a0dbbb3be683&quot; : {
       ...
       }
    }
 TODO: use normalizr to handle this: https://github.com/paularmstrong/normalizr
</code></pre><p>This function will make sure that we send back responses in the correct format
This function accepts as an input an array of entity ids</p>
</dd>
<dt><a href="helpers/README.md#formatAPIOutput">formatAPIOutput(request, entityType, rawEntities)</a></dt>
<dd><p>The responses from the API need be in the form of:</p>
<pre><code>    {
    &quot;results&quot; : [&quot;c1a1738648ecda410dc3a0dbbb3be683&quot;, &quot;401b2f4c267d2ffdd34c379060d97ddc&quot;],
    &quot;entities&quot;: {
      &quot;c1a1738648ecda410dc3a0dbbb3be683&quot; : {
       ...
       }
    }
 TODO: use normalizr to handle this: https://github.com/paularmstrong/normalizr
</code></pre><p>This function will make sure that we send back responses in the correct format
This function accepts as an input an array of entities and no extra ORM calls are needed</p>
</dd>
</dl>

---

## URL Utils

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

---

## Validation

### validate(input) ⇒ <code>obj</code>

validate input using a Joi schema
The schema can be either passed as an object or as a reference to a schema in the `api-plugin-configs`
Example: to validate data against the contact collection create the schema passed will be:
collections.contact.create


# API handlers prerequisites

These functions are generic functions that are used as prerequisites for Hapi routes. Prerequisites functions are executed before the main route handler is executed.

> prerequisites should verify generic things rather than business logic which belongs in the route handler or the libraries we're creating away from Hapi

<dl>
<dt><a href="prerequisites/README.md#checkCompanyPlanUsage">checkCompanyPlanUsage(usageGetter)</a> ⇒ <code>type</code></dt>
<dd><p>checkCompanyPlanUsage must be used after company pre-handler
Ir Checks a provided attempt against the company current plan limits. If any of these limits is exceeded, will return a 403</p>
</dd>
<dt><a href="prerequisites/README.md#company">company(request, reply)</a> ⇒ <code>Object</code></dt>
<dd><p>Get full company data with a plan</p>
</dd>
<dt><a href="prerequisites/README.md#permission">permission(request, reply)</a> ⇒ <code>Object</code></dt>
<dd><p>Get access object for a user</p>
</dd>
<dt><a href="prerequisites/README.md#publicAuth">publicAuth(request, reply)</a> ⇒ <code>User</code> | <code>Error</code></dt>
<dd><p>Validates a request coming to the public API, by checking the &quot;token/signature&quot; pair, and eventual IP whitelists.
If success, will return the user associated with the provided key, otherwise a Boom Error</p>
</dd>
<dt><a href="prerequisites/README.md#user">user(request, reply)</a> ⇒ <code>Object</code></dt>
<dd><p>Get user by credentialId</p>
</dd>
</dl>

# Core Utilities

Utility functions are functions that can be used in multiple places in our application. They have been moved into this common utils repo to KISS ;)

## Feedback

Functions required to generate generic feedback links.

<dl>
<dt><a href="lib/feedback/README.md#buildUrl">buildUrl(action, params, response)</a> ⇒ <code>String</code></dt>
<dd><p>Creating feedback url link</p>
</dd>
<dt><a href="lib/feedback/README.md#encrypt">encrypt(plainText)</a> ⇒ <code>String</code></dt>
<dd><p>Encrypting feedback url link link</p>
</dd>
<dt><a href="lib/feedback/README.md#decrypt">decrypt(uncodedText)</a> ⇒ <code>String</code></dt>
<dd><p>Decrypt string encrypted string</p>
</dd>
</dl>

---

## Plans

Functions related to checking the companies usage of the features and limits they have. Companies in our application can have various limitations in terms of access certain features and also in terms of the ability to execute certain actions at a limited rate (number of contacts, number of users, etc.)

<dl>
<dt><a href="lib/plans/README.md#checkUsageAttempt">checkUsageAttempt(request, attempt, company)</a> ⇒ <code>Object.&lt;error&gt;</code></dt>
<dd><p>Check company if all services are still allowed and not reached a allowed limit</p>
</dd>
<dt><a href="lib/plans/README.md#getCompanyPlanUsage">getCompanyPlanUsage(action, companyId)</a> ⇒ <code>Object</code></dt>
<dd><p>Get company plan with a service usage values</p>
</dd>
<dt><a href="lib/plans/README.md#getContactsUsage">getContactsUsage(request, companyId)</a> ⇒ <code>Object</code></dt>
<dd><p>Get total number of contacts per company</p>
</dd>
<dt><a href="lib/plans/README.md#getMessagesUsage">getMessagesUsage(request, companyId)</a> ⇒ <code>Object</code></dt>
<dd><p>Get number of sent messages by company for a N time (1 month)</p>
</dd>
<dt><a href="lib/plans/README.md#getUsage">getUsage(action, service, companyId)</a> ⇒ <code>Object</code></dt>
<dd><p>Get number of service usage</p>
</dd>
<dt><a href="lib/plans/README.md#getUsersUsage">getUsersUsage(request, companyId)</a> ⇒ <code>Object</code></dt>
<dd><p>Get number of users and pending invitation users for company</p>
</dd>
<dt><a href="lib/plans/README.md#updatePlanForSubscription">updatePlanForSubscription(request, chargebeeSubscriptionId, chargebeePlanId, chargebeeUsersAddon)</a> ⇒ <code>Promise</code></dt>
<dd><p>Update company plan after subscribe</p>
</dd>
</dl>


# Users

<dl>
<dt><a href="lib/users/README.md#roleSchema">roleSchema(The)</a> ⇒ <code>Object</code></dt>
<dd><p>get the appropriate role schema from the access schemas defined in the configs</p>
</dd>
<dt><a href="lib/users/README.md#featureSchema">featureSchema(The)</a> ⇒ <code>Object</code></dt>
<dd><p>get the appropriate feature schema from the access schemas defined in the configs</p>
</dd>
<dt><a href="lib/users/README.md#generate">generate()</a> ⇒ <code>Object</code></dt>
<dd><p>generate the correct access object with the correct user roles and abilities and feature access</p>
</dd>
<dt><a href="lib/users/README.md#userAccess">userAccess(request, userId)</a> ⇒ <code>Object</code></dt>
<dd><p>Build user access object based on company plans and related company features and user type</p>
</dd>
</dl>

# Generic Entities Creation

Along our application, we will need to create generic entities like companies, contacts, users, etc. These util functions provide a generic standardized way of creating those entties.

## Company

<dl>
<dt><a href="lib/create/README.md#createCompany">createCompany(request, companyId, name, planId)</a> ⇒ <code>Promise.&lt;Object&gt;</code></dt>
<dd><p>Create company if it not exists alreaty</p>
</dd>
<dt><a href="lib/create/README.md##generateStagesDoc">generateStagesDoc(companyId)</a> ⇒ <code>Array</code></dt>
<dd><p>Build default stages for a company. For each stage generate a id</p>
</dd>
</dl>
