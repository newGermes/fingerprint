'use strict';

import advCo from '../config/advertising';
     
const elms = document.querySelectorAll(advCo.selector);

export default {
    on: () => elms.forEach(elm => elm.style.display = 'block'),
    off: () => elms.forEach(elm => elm.style.display = 'none')
};