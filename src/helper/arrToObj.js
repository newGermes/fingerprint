"use strict";

export default arr =>
  Object.assign({}, ...arr.map(item => ({ [item["key"]]: item["value"] })));
