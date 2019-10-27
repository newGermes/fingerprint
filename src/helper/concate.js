"use strict";

export default (components, template) => {
  let data = "";
  template.forEach(name =>
    components[name]
      ? (data += String.call(null, components[name]))
      : (data += "")
  );
  return data;
};
