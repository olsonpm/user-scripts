// ==UserScript==
// @name           npmjs.com scripts
// @namespace      Violentmonkey Scripts
// @match          https://www.npmjs.com/
// @name           All stackexchange sites
// @version        0.1.0
// @author         Phil
// @updateURL      https://raw.githubusercontent.com/olsonpm/user-scripts/dev/npm.user.js
// ==/UserScript==

document.querySelector('input[type="search"][name="q"]').focus();
