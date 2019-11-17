'use string';

export default (data, config) => {
    const restruct = data.map(obj => ({[obj['key']]: obj['value']}));
    const dataObj = Object.assign({}, ...restruct);

    return config.map(key => dataObj[key]).join();
};