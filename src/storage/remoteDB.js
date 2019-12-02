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
                processData: false,
                contentType: false
            })
            .done(result => resolve(result))
            .fail(err => reject(err));
        });
    },
    set: (key, data) => {
        const formData = new FormData();

        formData.append('key',key);
        formData.append('data', JSON.stringify(data));

        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false
            })
            .done(result => resolve(result))
            .fail(err => reject(err));
        });
    }
};
