'use strict';

const _       = require('lodash');
const assert  = require('assert');

const urlUtils = require('../index');

describe('urlUtils helper', function () {

    describe('should fail if no URI is passed', function () {

        it('should fail if no URI is passed to isValidURI', function(){
            assert.equal(urlUtils.isValidURI(), false);
        });
        it('should fail if no URI is passed to getHostName', function(){
            assert.equal(urlUtils.getHostName(), null);
        });
        it('should fail if no URI is passed to getDomain', function(){
            assert.equal(urlUtils.getDomain(), null);
        });
        it('should fail if no URI is passed to getDomainName', function(){
            assert.equal(urlUtils.getDomainName(), null);
        });
        it('should fail if no URI is passed to getCanonicalLinkedinUrl', function(){
            assert.equal(urlUtils.getCanonicalLinkedinUrl(), null);
        });
    });

    describe('should return null if no valid URI was passed', function () {

        it('should return null if no valid URI was passed to getHostName', function(){
            assert.equal(urlUtils.getHostName("http:// shouldfail.com"), null);
        });
        it('should return null if no valid URI was passed to getDomain', function(){
            assert.equal(urlUtils.getDomain("http:// shouldfail.com"), null);
        });
        it('should return null if no valid URI was passed to getDomainName', function(){
            assert.equal(urlUtils.getDomainName("http:// shouldfail.com"), null);
        });
        it('should return null if no valid URI was passed to getCanonicalLinkedinUrl', function(){
            assert.equal(urlUtils.getCanonicalLinkedinUrl("http:// shouldfail.com"), null);
        });
    });

    describe('isValidURI fuction', function () {

        it('should return false<boolean> if no valid URI is passed', function(){
            let URIs = require('./data/URIs.fail.js');
            _.each(URIs, function(URI){
                assert.equal(urlUtils.isValidURI(URI), false);
            });
        });
        it('should return true<boolean> if a valid URI is passed', function(){
           let URIs = require('./data/URIs.match.js');
            _.each(URIs, function(URI){
                assert.equal(urlUtils.isValidURI(URI.url), true);
            });
        });
    });

    describe('getHostName function', function () {
        it('should return the correct hostname for a valid URI', function(){
           var URIs = require('./data/URIs.match.js');
            _.each(URIs, function(URI){
                assert.equal(urlUtils.getHostName(URI.url), URI.hostname);
            });
        });
    });

    describe('getDomain function', function () {
        it('should return the correct domain for a valid URI', function(){
           var URIs = require('./data/URIs.match.js');
            _.each(URIs, function(URI){
                assert.equal(urlUtils.getDomain(URI.url), URI.domain);
            });
        });
    });

    describe('getDomainName function', function () {
        it('should return the correct domainName for a valid URI', function(){
           var URIs = require('./data/URIs.match.js');
            _.each(URIs, function(URI){
                assert.equal(urlUtils.getDomainName(URI.url), URI.domainName);
            });
        });
    });

    describe('getCanonicalLinkedinUrl function', function () {
        it('should correctly call the linkedin-canonical-url', function(){
            assert.equal(urlUtils.getCanonicalLinkedinUrl("http://LINKEDIN.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub"), "https://www.linkedin.com/in/krzysztof-marzec-b50576a7");
            assert.equal(urlUtils.getCanonicalLinkedinUrl("https://sy.linkedin.com/pub/krzysztof-marzec/a7/576/b50?trk=biz_employee_pub"), "https://www.linkedin.com/in/krzysztof-marzec-b50576a7");
        });
    });

});
