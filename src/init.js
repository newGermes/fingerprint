'use strict';

import advCo from './config/advertising';
import fingerprint from './util/fingerprint2';
import handle from './util/handle';
import render from './view/render';
import storage from './storage';
import validate from './util/validate';
import extract from './util/extract';

const { period } = advCo;
 
export default {
    start: () =>
        (async () => {
            const hash = await handle(fingerprint);
            const fingerprints = await handle(storage.getAll(hash));
            const isRender = validate(fingerprints, period);
            const data = extract(fingerprints, period);
            
            if (isRender) {
                render.on();
                render.add('click', () => {
                    render.off();
                    handle(storage.setAll(hash, { click: (new Date).getTime() }));
                });
            } else {
                render.off();
                handle(storage.setAll(hash, data));
            }
        })()
};
// adv should be off by default(css)
