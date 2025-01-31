// Copyright © 2025 Adam Lui (https://github.com/adamlui) under the MIT license
// Source: https://assets.aiwebextensions.com/lib/dom.js/src/dom.js
// Requires: CryptoJS (https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js)

window.cryptoUtils = {
    digestMessage(msg) { return CryptoJS.SHA256(msg).toString(CryptoJS.enc.Hex) },
    generateSignature({ time, msg, pkey }) { return this.digestMessage(`${time}:${msg}:${pkey}`) }
};
