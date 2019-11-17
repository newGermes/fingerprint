'use strict';

import fingerprint from './storage/fingerprint2';
import async from './util/async';
import render from './view/render';

export default {
    start: () =>
        (async () => {
            const hash = await async(fingerprint);
            if (hash) {
                render.on();
            }
        })()
};