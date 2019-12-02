'use strict';

export default callback => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(callback());
            } catch (err) {
                reject(err);
            }
        }, 0);
    })
};