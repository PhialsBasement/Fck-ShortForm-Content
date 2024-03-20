// ==UserScript==
// @name         Element Nuker and TikTok Redirector
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Nukes short form content elements with specific selectors and redirects from TikTok to YouTube
// @match        *://*/*
// @grant        none
// @author       Phial
// ==/UserScript==

(function() {
    'use strict';

    // Function to nuke elements with specific selectors
    function nukeElements() {
        const selectors = [
            'div#dismissible.style-scope.ytd-rich-shelf-renderer',
            'div.x1n2onr6 > a.x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._a6hd',
            'div.x193iq5w.xgmub6v.x1ceravr',
            'a[aria-label="Video"].x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x87ps6o.x1lku1pv.x1a2a7pz.x6s0dn4.x78zum5.xdt5ytf.x5yr21d.xl56j7k.x1n2onr6.xh8yej3'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => element.remove());
        });
    }

    // Function to redirect from TikTok to YouTube
    function redirectToYouTube() {
        if (/.*\.tiktok\..*/.test(location.href)) {
            location.href = 'https://www.youtube.com';
        }
    }

    // Wait for the page to load completely
    window.addEventListener('load', function() {
        // Nuke elements with specific selectors
        nukeElements();

        // Redirect from TikTok to YouTube
        redirectToYouTube();
    });
})();