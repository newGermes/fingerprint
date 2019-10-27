"use strict";

import Fingerprint2 from "fingerprintjs2";
import { config } from "./config";
import run from "./main";

let isNext = true;
if (!sessionStorage.getItem("test")) {
  sessionStorage.setItem("test", "1234");
} else {
  console.log("session exist");
}

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
