'use strict';

import advCo from '../config/advertising';
import '../util/jquery.iframetracker';

const { selector } = advCo;

export default {
    on: () => document.querySelectorAll(selector)
                .forEach(elm => elm.style.display = 'block'),
    off: () => document.querySelectorAll(selector)
                .forEach(elm => elm.style.display = 'none'),
    remove: () => document.querySelectorAll(selector)
                    .forEach(e => e.remove()),            
    addclick: callback => { 
        $( selector ).iframeTracker({
            blurCallback: callback
        });
    },
}

// without caching elements 'advCo.selector'