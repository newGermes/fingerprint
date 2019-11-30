'use strict';

import advCo from '../config/advertising';

const listener = (data, callback) => {
    callback(data);
};

export default {
    on: () => document.querySelectorAll(advCo.selector)
                .forEach(elm => elm.style.display = 'block'),
    off: () => document.querySelectorAll(advCo.selector)
                .forEach(elm => elm.style.display = 'none'),
    add: (type, data, callback) => 
        document.querySelectorAll(advCo.selector).forEach(elm => 
            elm.addEventListener(type, listener.bind(null, data, callback))
        ),
}

// without caching elements 'advCo.selector'