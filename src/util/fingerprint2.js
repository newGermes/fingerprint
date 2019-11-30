import Fingerprint2 from "fingerprintjs2";
import fingerprintCo from "../config/fingerprint2";
import createHash from './hash';

export default new Promise((resolve, reject) => {
    const ipElm = document.querySelector('#fipr-stat');
    const ip = ipElm ? ipElm.value : '';

    try {
        if (window.requestIdleCallback) {
            requestIdleCallback(() => {
                Fingerprint2.get(components => {
                    components.push({key: 'ip', value: ip});
                    createHash(components, fingerprintCo)
                        .then(hash => resolve(hash))
                        .catch(e => console.error(e));
                });
            });
        } else {
            setTimeout(() => {
                Fingerprint2.get(components => {
                    components.push({key: 'ip', value: ip});
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
