import CryptoJS from 'crypto-js';

const KEY = "secret123";

export var encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, KEY).toString();
}

export var decrypt = (text) => {
    let bytes = CryptoJS.AES.decrypt(text, KEY);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
