"use strict";

import Fingerprint2 from "fingerprintjs2";
import { config } from "./config";
import run from "./main";

let isNext = true;

if (window.requestIdleCallback && isNext) {
  requestIdleCallback(() => {
    Fingerprint2.get(components => {
      run(components, config);
    });
  });
} else if (isNext) {
  setTimeout(() => {
    Fingerprint2.get(components => {
      run(components, config); // an array of components: {key: ..., value: ...}
    });
  }, 500);
}
