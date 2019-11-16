'use strict';

import fingerprint from './modules/fingerprint2';

export default () => {
    fingerprint
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.warn(e);
    });

};