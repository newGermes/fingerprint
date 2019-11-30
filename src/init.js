'use strict';

import fingerprint from './util/fingerprint2';
import handle from './util/handle';
import render from './view/render';
import storage from './storage';
import validate from './util/validate';

const fn = data => {
    render.off();
}

export default {
    start: () =>
        (async () => {
            const isFingerprint = await handle(storage.getAll('fingerprint'));
            const hash = await handle(fingerprint);
            const isRender = validate(isFingerprint, hash);
            console.log(hash);
            if (isFingerprint) {
                render.off();
                handle(storage.set('cookiesDB', 'init', hash));
            } else {
                render.on();
                render.add('click',hash, fn);
            }

            // ;
        })()
};