// ==UserScript==
// @name         X Disable Age Assurance
// @namespace    https://github.com/makotocolors
// @version      1.0.0
// @description  Userscript that disables the age assurance flow on X (Twitter).
// @author       Makoto
// @homepage     https://github.com/makotocolors/X-Disable-Age-Assurance
// @supportURL   https://github.com/makotocolors/X-Disable-Age-Assurance/issues
// @match        https://x.com/*
// @match        https://twitter.com/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

(() => {
  const timer = setInterval(() => {
    const overrides = unsafeWindow.__INITIAL_STATE__?.featureSwitch?.customOverrides;
    if (overrides) {
      overrides.rweb_age_assurance_flow_enabled = false;
      clearInterval(timer);
    };
  }, 10);
})();
