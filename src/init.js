'use strict';

import fingerprint from './modules/fingerprint2';
import async from './util/async';
import render from './modules/render';

export default {
    start: () =>
        (async () => {
            const hash = await async(fingerprint);
            if (hash) {
                render.on();
            }
            console.log(hash);
        })()
};