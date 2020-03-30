// ==UserScript==
// @name           mail.protonmail.com scripts
// @namespace      Violentmonkey Scripts
// @match          https://mail.protonmail.com/
// @name           mail.protonmail.com
// @version        0.1.0
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

history.pushState = (f =>
  function pushState() {
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event("pushstate"));
    window.dispatchEvent(new Event("locationchange"));
    return ret;
  })(history.pushState);

history.replaceState = (f =>
  function replaceState() {
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event("replacestate"));
    window.dispatchEvent(new Event("locationchange"));
    return ret;
  })(history.replaceState);

window.addEventListener("popstate", () => {
  window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", fixTitle);

function fixTitle() {
  document.title = document.title.replace(/^\(\d+\) /, "");
}

fixTitle();
