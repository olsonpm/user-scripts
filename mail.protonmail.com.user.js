// ==UserScript==
// @name           mail.protonmail.com scripts
// @namespace      Violentmonkey Scripts
// @match          https://mail.protonmail.com/*
// @name           mail.protonmail.com
// @version        0.1.2
// @author         Phil
// @updateURL      https://raw.githubusercontent.com/olsonpm/user-scripts/dev/mail.protonmail.com.user.js
// ==/UserScript==

setInterval(fixTitle, 100);

function fixTitle() {
  document.title = document.title.replace(/^\(\d+\) /, "");
}

fixTitle();
