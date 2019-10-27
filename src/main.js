"use strict";

import hash from "./helper/hash";
import arrToObj from "./helper/arrToObj";
import dataConcate from "./helper/concate";

const hashId = document.getElementById("hash");

const run = (components, config) => {
  const compObj = arrToObj(components);
  const concateString = dataConcate(compObj, config);
  const dataHash = hash(concateString);

  hashId.innerHTML = dataHash + "<br><br>" + concateString;
};

export default run;
