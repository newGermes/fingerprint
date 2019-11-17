'use strict';

import createHash from 'create-hash';
import concat from './concat';

export default (fingerprints, config) => {
    return new Promise((resolve, reject) => {
        const hash = createHash('sha224');
        const encrypted = [];
        
        hash.write(concat(fingerprints, config));
        hash.on('readable', () => {
            let chunk;
            try {
                while (null !== (chunk = hash.read())) {
                    encrypted.push(chunk.toString('hex'));
                }
            } catch (e) {
                reject(e);
            }
        });
        hash.on('end', () => {
            resolve(encrypted.join());
        });
        hash.end();
    });
};