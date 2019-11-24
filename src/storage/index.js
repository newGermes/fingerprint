'use strict';

import cookiesDB from './cookies';
import indexedDB from './indexedDB';
import localStorageDB from './localStorage';
import remoteDB from './remoteDB';

const storage = {
    cookiesDB, 
    indexedDB, 
    localStorageDB, 
    remoteDB 
};

export default {
    get: type => storage[type].get(),
    set: (type, data) => storage[type].set(type, data)
};