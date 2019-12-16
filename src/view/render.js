'use strict';

import advCo from '../config/advertising';

const { selector } = advCo;

const listener = (callback, event) => callback(event);

export default {
    on: () => document.querySelectorAll(selector)
                .forEach(elm => elm.style.display = 'block'),
    off: () => document.querySelectorAll(selector)
                .forEach(elm => elm.style.display = 'none'),
    add: (type, callback) => 
        document.querySelectorAll(selector).forEach(elm => 
            elm[`on${type}`] = listener.bind(null, callback)
        ),
}

// without caching elements 'advCo.selector'