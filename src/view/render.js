'use strict';

import advCo from '../config/advertising';
     
const elms = document.querySelectorAll(advCo.selector);
const listener = (data, callback) => {
    callback(data);
};

export default {
    on: () => elms.forEach(elm => elm.style.display = 'block'),
    off: () => elms.forEach(elm => elm.style.display = 'none'),
    add: (type, data, callback) => 
        elms.forEach(elm => 
            elm.addEventListener(type, listener.bind(null, data, callback))
        ),
}