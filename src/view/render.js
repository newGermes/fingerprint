'use strict';

import advCo from '../config/advertising';

const listener = (callback, event) => callback(event);

export default {
    on: () => document.querySelectorAll(advCo.selector)
                .forEach(elm => elm.style.display = 'block'),
    off: () => document.querySelectorAll(advCo.selector)
                .forEach(elm => elm.style.display = 'none'),
    add: (type, callback) => 
        document.querySelectorAll(advCo.selector).forEach(elm => 
            elm.addEventListener(type, listener.bind(null, callback))
        ),
}

// without caching elements 'advCo.selector'