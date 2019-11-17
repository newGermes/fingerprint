'use strict';

export default async promise => {
    try {
        return await promise;
    } catch (e) {
        throw e;
    }
};