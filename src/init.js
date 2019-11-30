'use strict';

import fingerprint from './util/fingerprint2';
import handle from './util/handle';
import render from './view/render';
import storage from './storage';

const fn = data => {
    render.off();
}

export default {
    start: () =>
        (async () => {
            const hash = await handle(fingerprint);
            const isFirst = await handle(storage.get('cookiesDB', 'init'));

            if (isFirst) {
                render.off();
                handle(storage.set('cookiesDB', 'init', hash));
            } else {
                render.on();
                render.add('click',hash, fn);
            }
        })()
};