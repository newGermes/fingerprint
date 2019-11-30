'use strict';

export default {
    get: key => {
        return new Promise((resolve, reject) => {
            resolve(`cookies: ${key}`);
        })
    }
};