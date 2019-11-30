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
            const isClicked = validate(isFingerprint, advCo.period);
            
            if (isClicked) {
                render.off();
            } else {
                render.on();
                render.add('click', hash, data => {
                    render.off();
                    handle(storage.setAll(data, { click: (new Date).getTime() }));
                });
            }
        })()
};
// adv should be off by default(css)
