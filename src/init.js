'use strict';

import advCo from './config/advertising';
import fingerprint from './util/fingerprint2';
import handle from './util/handle';
import render from './view/render';
import storage from './storage';
import validate from './util/validate';

export default {
    start: () =>
        (async () => {
            const hash = await handle(fingerprint);
            const isFingerprint = await handle(storage.getAll(hash));
            const isRender = validate(isFingerprint, advCo.period);
            
            if (isRender) {
                render.on();
                render.add('click', () => {
                    render.off();
                    handle(storage.setAll(hash, { click: (new Date).getTime() }));
                });
            } else {
                render.off();
                handle(storage.setAll(hash, {}));
            }
        })()
};
// adv should be off by default(css)
