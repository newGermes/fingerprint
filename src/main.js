"use strict";

import hash from "./helper/hash";
import arrToObj from "./helper/arrToObj";
import dataConcate from "./helper/concate";

const run = (components, config) => {
  const compObj = arrToObj(components);
  const concateString = dataConcate(compObj, config);
  const dataHash = hash(concateString);

  console.log(concateString, dataHash);
};

export default run;
