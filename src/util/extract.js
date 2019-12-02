'use strict';

export default (fingerprint, stop) => {
    const dateNow = (new Date).getTime();
    fingerprint = fingerprint.find(elm => elm && elm.length);
    fingerprint = fingerprint ? JSON.parse(fingerprint) : false;

    if (fingerprint && fingerprint.click) {
        const diff = dateNow - fingerprint.click;
        const days = Math.floor(diff / (24*60*60*1000));

        return days > stop ? {} : fingerprint;
    } else {
        return {};
    }


};