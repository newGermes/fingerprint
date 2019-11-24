'use strict';

import advCo from '../config/advertising';
     
const elms = document.querySelectorAll(advCo.selector);
const clickFn = (data, callback, e) => {
    callback(data);
};

export default {
    on: () => elms.forEach(elm => elm.style.display = 'block'),
    off: () => elms.forEach(elm => elm.style.display = 'none'),
    click: (data, callback) => 
        elms.forEach(elm => 
            elm.addEventListener('click', clickFn.bind(null, data, callback))
        )
}