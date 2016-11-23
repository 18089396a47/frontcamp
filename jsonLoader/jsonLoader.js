const PREFIX = 'module.exports = ';
const PREFIX_LENGTH = PREFIX.length;

module.exports = function jsonLoader(content) {
    const json = JSON.parse(content.slice(PREFIX_LENGTH, -1));
    for (const prop of Object.keys(json)) {
        if (typeof json[prop] !== 'object' && json[prop].toString() === '1') {
            delete json[prop];
        }
    }
    return `${PREFIX}${JSON.stringify(json)};`;
};
