import Fingerprint2 from "fingerprintjs2";
import fingerprintCo from "../config/fingerprint2";

export default new Promise((resolve, reject) => {
    Fingerprint2.get(components => {
        resolve({components, fingerprintCo});
      });
});

// https://habr.com/ru/post/213515/ IndexedDB
