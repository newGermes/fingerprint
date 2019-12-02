'use strict';

import advCo from '../config/advertising';
import '../util/jquery';

const { url } = advCo;

export default {
    get: key => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${url}?key=${key}`,
                type: 'GET',
                dataType: 'text'
            })
            .done(result => resolve(result))
            .fail(err => reject(err));
        });
    },
    set: (key, data) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                type: 'POST',
                dataType: 'text',
                data: `key=${key}&data=${JSON.stringify(data)}`
            })
            .done(result => resolve(result))
            .fail(err => reject(err));
        });
    }
};
