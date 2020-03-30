// ==UserScript==
// @name           mail.protonmail.com scripts
// @namespace      Violentmonkey Scripts
// @match          https://mail.protonmail.com/*
// @name           mail.protonmail.com
// @version        0.1.2
// @author         Phil
// @updateURL      https://raw.githubusercontent.com/olsonpm/user-scripts/dev/mail.protonmail.com.user.js
// ==/UserScript==

//
// README
//  - This script creates a hook for whenever the location changes.  That way we
//    can listen to that and remove the unread counter in the title accordingly
//
//    Most of the code is from here
//    https://stackoverflow.com/a/52809105/984407
//

setInterval(fixTitle, 100);

function fixTitle() {
  document.title = document.title.replace(/^\(\d+\) /, "");
}

fixTitle();
