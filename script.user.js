// ==UserScript==
// @name                   X Disable Age Assurance
// @namespace              https://github.com/makotocolors
// @version                1.1.0
// @description            Userscript that disables the age assurance flow on X (Twitter).
// @author                 Makoto
// @homepageURL            https://github.com/makotocolors/X-Disable-Age-Assurance
// @supportURL             https://github.com/makotocolors/X-Disable-Age-Assurance/issues
// @match                  https://x.com/*
// @match                  https://twitter.com/*
// @run-at                 document-start
// @grant                  unsafeWindow
// @updateURL              https://raw.githubusercontent.com/makotocolors/X-Disable-Age-Assurance/main/script.user.js
// @downloadURL            https://raw.githubusercontent.com/makotocolors/X-Disable-Age-Assurance/main/script.user.js
// ==/UserScript==

const patcher = () => {
    const override = unsafeWindow.__INITIAL_STATE__?.featureSwitch?.customOverrides;
    if (override) {
        override.rweb_age_assurance_flow_enabled = false;
        return true;
    }
};

patcher() || new MutationObserver(() => patcher() && observer.disconnect()).observe(document.documentElement, { childList: true, subtree: true });
