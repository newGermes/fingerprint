'use strict';

import advCo from '../config/advertising';
import dbwrapper from '../util/dbwrapper';
import '../util/jquery';

const { url } = advCo;

export default {
    get: key => {
        return dbwrapper(() => {
            return $.ajax({
                        url: `${url}?key=${key}`,
                        type: 'GET'
                    });
        });
    },
    set: (key, data) => {
        return dbwrapper(() => {
            return $.ajax({
                        url,
                        type: 'POST',
                        data: `key=${key}&data=${JSON.stringify(data)}`,
                    });
        });
    }
};
