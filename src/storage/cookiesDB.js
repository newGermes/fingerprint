'use strict';

export default {
    get: key => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const str = `(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`;
                    const rx = new RegExp(str);
                    const cookieValue = document.cookie.replace(rx, "$1");
                    resolve(cookieValue);
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
                    // "init={"hash": "dsfsdfsdf", "data": "13213123123123"}"
                    document.cookie = `${key}=${JSON.stringify(data)}`;
                    resolve(true);
                } catch (e) {
                    reject(e);
                }
            }, 0);
        });
    }
};