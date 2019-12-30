'use strict';

import advCo from './config/advertising';
import fingerprint from './util/fingerprint2';
import handle from './util/handle';
import render from './view/render';
import storage from './storage';
import validate from './util/validate';
import extract from './util/extract';
import time from './util/time';
import host from './util/host';

const { period } = advCo;
const { getTime } = time;
const { getHost } = host; 
 
export default {
    start: () =>
        (async () => {
            const hash = await handle(fingerprint);
            const fingerprints = await handle(storage.getAll(hash));
            const isRender = validate(fingerprints, period);
            const data = extract(fingerprints, period);
            
            if (isRender) {
                // render.on();
                render.addclick(() => {
                    render.remove();
                    handle(storage.setAll(hash, {
                        host: getHost,  
                        click: getTime
                    }));
                });
            } else {
                render.remove();
                handle(storage.setAll(hash, data));
            }
        })()
};
// adv should be off by default(css)
