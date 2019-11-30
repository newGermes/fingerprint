import Fingerprint2 from "fingerprintjs2";
import fingerprintCo from "../config/fingerprint2";
import createHash from './hash';

export default new Promise((resolve, reject) => {
    try {
        if (window.requestIdleCallback) {
            requestIdleCallback(() => {
                Fingerprint2.get(components => {
                    createHash(components, fingerprintCo)
                        .then(hash => resolve(hash))
                        .catch(e => console.error(e));
                });
            });
        } else {
            setTimeout(() => {
                Fingerprint2.get(components => {
                    createHash(components, fingerprintCo)
                        .then(hash => resolve(hash))
                        .catch(e => console.error(e));
                });
            }, 500);    
        }

    } catch (e) {
        reject(e);
    }
});

// https://habr.com/ru/post/213515/ IndexedDB
