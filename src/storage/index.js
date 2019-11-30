'use strict';

import cookiesDB from './cookiesDB';
import indexedDB from './indexedDB';
import localStorageDB from './localStorageDB';
import remoteDB from './remoteDB';
import allDB from './allDB';

const storage = {
    cookiesDB, 
    indexedDB, 
    localStorageDB, 
    remoteDB,
    allDB 
};

export default {
    get: (type, key) => storage[type].get(key),
    set: (type, key, data) => storage[type].set(type, key, data),
};