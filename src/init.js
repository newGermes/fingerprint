'use strict';

import fingerprint from './util/fingerprint2';
import async from './util/async';
import render from './view/render';
import storage from './storage';

const fn = data => {
    console.log(data);
}

export default {
    start: () =>
        (async () => {
            const hash = await async(fingerprint);
            if (hash) {
                render.on();
                render.click('hello', fn);
            }
        })()
};