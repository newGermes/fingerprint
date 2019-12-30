'use strict';

import time from './time';
const { getTime } = time;

export default (fingerprint, stop) => {
    fingerprint = fingerprint.find(elm => elm && elm.length);
    fingerprint = fingerprint ? JSON.parse(fingerprint) : false;

    if (!fingerprint) {
        return false;
    } else if (fingerprint && !fingerprint.click) {
        return true;
    } else {
        const diff = getTime - fingerprint.click;
        const days = Math.floor(diff / (24*60*60*1000));

        return days > stop;
    }
};