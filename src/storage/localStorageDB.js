'use strict';

export default {
    get: key => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const value = localStorage.getItem(key);
                    resolve(value);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        })
    },
    set: (key, data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    localStorage.setItem(key, JSON.stringify(data));
                    resolve(true);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        });
    }
};