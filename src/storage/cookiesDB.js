'use strict';

import dbwrapper from '../util/dbwrapper';

export default {
    get: key => {
        return dbwrapper(() => {
            const str = `(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`;
            const rx = new RegExp(str);
            const cookieValue = document.cookie.replace(rx, "$1");
            return cookieValue;
        });
    },
    set: (key, data) => {
        return dbwrapper(() => {
            document.cookie = `${key}=${JSON.stringify(data)}`;
            return true;
        });
    }
};