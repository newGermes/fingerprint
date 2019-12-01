'use strict';

import dbwrapper from '../util/dbwrapper';

export default {
    get: key => {
        return dbwrapper(() => {
            if (window.localStorage) {
                return localStorage.getItem(key);
            } else {
                return '';
            }
        });
    },
    set: (key, data) => {
        return dbwrapper(() => {
            if (window.localStorage) {
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } else {
                return false;
            }

        });
    }
};