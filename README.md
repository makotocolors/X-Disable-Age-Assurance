<div align="center">

![Age Assurance Prompt Example](https://i.imgur.com/Pv7KqPb.png)

# X Disable Age Assurance

A lightweight Userscript that automatically disables the age assurance flow on X (formerly Twitter) by overriding the platform's initial state feature switches.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/makotocolors/X-Disable-Age-Assurance/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/makotocolors/X-Disable-Age-Assurance)](https://github.com/makotocolors/X-Disable-Age-Assurance/issues)
[![GitHub stars](https://img.shields.io/github/stars/makotocolors/X-Disable-Age-Assurance)](https://github.com/makotocolors/X-Disable-Age-Assurance/stargazers)

</div>

---

## ⚠️ Legal & Platform Disclaimer

> **Use strictly at your own risk. This script is provided "as is" for educational, informational, and research purposes only.**

This script modifies the frontend behavior of the platform and may allow users to bypass regional restrictions, age verification checks, or platform blocks mandated by local laws, government regulations, or court orders (including, but not limited to, legal restrictions in **Brazil** and **Ukraine**).

By choosing to install and use this script, you explicitly acknowledge and agree to the following:
* **User Responsibility:** You are solely responsible for ensuring that your use of this software complies with all applicable local, state, national, and international laws in your jurisdiction.
* **Platform Terms of Service:** Using this script may violate the Terms of Service of X (Twitter).
* **No Endorsement of Illegal Activity:** The author and contributors of this repository do not endorse, encourage, or support the circumvention of any laws, legal injunctions, court orders, or governmental restrictions.
* **Absolute Exemption from Liability:** The creator of this script assumes **zero liability or responsibility** for any legal consequences, fines, criminal charges, or any other legal repercussions. Furthermore, the author is not liable for any **account restrictions, suspensions, bans, or data loss** that may occur as a result of using, modifying, or distributing this software.

---

## 💡 Inspiration & Alternative

This project was heavily inspired by the [InsensitiveX](https://orca.pet/insensitivex/) extension, which is a fantastic tool for bypassing this block. 

* **For general users:** We highly recommend using the **[InsensitiveX Extension](https://orca.pet/insensitivex/)** for a simple, plug-and-play installation directly in your browser.
* **For advanced users:** This userscript is provided as an alternative method for those who already use a userscript manager (like Violentmonkey or Tampermonkey) and prefer to keep their custom scripts centralized in one place.

---

## ✨ Features

* 🚀 **Zero Configuration:** Works seamlessly right out of the box.
* 🪶 **Extremely Lightweight:** Minimal code footprint ensures no performance impact on page loading speeds.
* 🌐 **Broad Compatibility:** Fully supports both `x.com` and `twitter.com` domains.

---

## 💾 Installation

### 1. Install a Userscript Manager

First, install a Userscript manager extension for your browser:
**[Violentmonkey](https://violentmonkey.github.io/)** or **[Tampermonkey](https://www.tampermonkey.net/)**.

After installation, refresh your browser if necessary.

### 2. Install the Script

Choose one of the following methods:

#### Option A — One-Click Installation *(Recommended)*

Open the link below and your Userscript manager should automatically detect and offer installation:

[`Install X Disable Age Assurance`](https://raw.githubusercontent.com/makotocolors/X-Disable-Age-Assurance/main/script.user.js)

Review the permissions and confirm the installation.

#### Option B — Manual Installation

If automatic installation does not work:

1. Open your Userscript manager dashboard.
2. Click **Create a new script** (usually the `+` button).
3. Copy the contents from [`script.user.js`](https://github.com/makotocolors/X-Disable-Age-Assurance/blob/main/script.user.js) or paste the code below.
4. Replace the default template.
5. Save the script (`Ctrl + S` or `Cmd + S`).

```javascript
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
// @updateURL    https://raw.githubusercontent.com/makotocolors/X-Disable-Age-Assurance/main/script.user.js
// @downloadURL  https://raw.githubusercontent.com/makotocolors/X-Disable-Age-Assurance/main/script.user.js
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
```

### 3. Done

Refresh X (Twitter) and the script should start working automatically.

---

## 🛠️ How it Works

The script executes at `document-start` and sets up a rapid timer to check for the `__INITIAL_STATE__` object on the global window. Once the object is found, it targets the `featureSwitch.customOverrides` and forces the `rweb_age_assurance_flow_enabled` flag to `false`, bypassing the prompt entirely before the UI renders it.

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! 

If you find a bug or have a suggestion, feel free to open an issue on the [issues page](https://github.com/makotocolors/X-Disable-Age-Assurance/issues).

---

## 📝 License

This project is open-source and licensed under the **GPL-3.0 License** - see the [LICENSE](https://github.com/makotocolors/X-Disable-Age-Assurance/blob/main/LICENSE) file for details.


---

> **Crafted with ❤️ by Makoto Colors!**
