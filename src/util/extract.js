'use strict';

import time from './time';
import host from './host';

const { getTime } = time;
const { getHost } = host; 
 
export default (fingerprint, stop) => {
    const host = { host: getHost };

    fingerprint = fingerprint.find(elm => elm && elm.length);
    fingerprint = fingerprint ? JSON.parse(fingerprint) : false;

    if (fingerprint && fingerprint.click) {
        const diff = getTime - fingerprint.click;
        const days = Math.floor(diff / (24*60*60*1000));

        return days > stop ? host : fingerprint;
    } else {
        return host;
    }
};