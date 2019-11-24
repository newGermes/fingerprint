'use strict';

import advCo from '../config/advertising';
     
const elms = document.querySelectorAll(advCo.selector);
const clickFn = e => {
    console.log(e.target);
};

export default {
    on: () => elms.forEach(elm => elm.style.display = 'block'),
    off: () => elms.forEach(elm => elm.style.display = 'none'),
    click: () => elms.forEach(elm => elm.addEventListener('click', clickFn))
}