import Fingerprint2 from "fingerprintjs2";
import fingerprintCo from "../config/fingerprint2";
import hash from '../util/hash';

export default new Promise((resolve, reject) => {
    try {
        Fingerprint2.get(components => {
            resolve(hash(components, fingerprintCo));
        });
    } catch (e) {
        reject(e);
    }
});

// https://habr.com/ru/post/213515/ IndexedDB