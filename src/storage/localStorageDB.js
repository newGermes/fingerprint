'use strict';

import dbwrapper from '../util/dbwrapper';

export default {
    get: key => {
        return dbwrapper(() => {
            return localStorage.getItem(key);
        });
    },
    set: (key, data) => {
        return dbwrapper(() => {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        });
    }
};