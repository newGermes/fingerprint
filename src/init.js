'use strict';

import fingerprint from './modules/fingerprint2';
import asyncFn from './util/asyncFn'

export default () => {
    (async () => {
        const finger = await asyncFn(fingerprint);
        console.log(finger);
    })();

};