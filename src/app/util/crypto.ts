import { CryptoJS } from 'crypto-js';

const KEY = "secret123";

export function encrypt(text){
    return CryptoJS.AES.encrypt(text, KEY).toString();
}

export function decrypt(text){
    let bytes = CryptoJS.AES.decrypt(text, KEY);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}
