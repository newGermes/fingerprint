'use strict';

import cookiesDB from './cookiesDB';
import localStorageDB from './localStorageDB';
import remoteDB from './remoteDB';

const storage = {
    cookiesDB,
    localStorageDB, 
    remoteDB 
};

export default {
    get: (type, key) => storage[type].get(key),
    set: (type, key, data) => storage[type].set(type, key, data),
    getAll: key => {
        const promises = [];
        for (const db in storage) {
            promises.push(storage[db].get(key));
        }
        return Promise.all(promises);
    },
    setAll: (key, data) => {
        const promises = [];
        for (const db in storage) {
            promises.push(storage[db].set(key, data));
        }
        return Promise.all(promises);
    }
};