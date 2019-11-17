import Fingerprint2 from "fingerprintjs2";
import fingerprintCo from "../config/fingerprint2";
import createHash from '../util/hash';

export default new Promise((resolve, reject) => {
    try {
        Fingerprint2.get(components => {
            createHash(components, fingerprintCo)
                .then(hash => resolve(hash))
                .catch(e => console.error(e));
        });
    } catch (e) {
        reject(e);
    }
});

// https://habr.com/ru/post/213515/ IndexedDB
