'use strict';

import createHash from 'create-hash';

export default (fingerprints, config) => {
    const hash = createHash('sha224');
    const encrypted = [];

    hash.write('ksjdhskjdfhksjdfhksjdhfkjsdhfjskdfhkjsdhfkjsdhfkjsdhfjskdhfkjsdhfkjsdhfkjsdhfjksdhfjksdhfjskdfhksjdfhsdjkf');


    hash.on('readable', () => {
        let chunk;
        while (null !== (chunk = hash.read())) {
            encrypted.push(chunk.toString('hex'));
          }
    });

    hash.on('end', () => {
        console.log(encrypted.join());
    });

    hash.end();
};