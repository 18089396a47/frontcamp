/* eslint no-param-reassign: 0 */
const PREFIX = 'module.exports = ';
const PREFIX_LENGTH = PREFIX.length;

function deleteNumbers(node) {
    for (const prop of Object.keys(node)) {
        if (typeof node[prop] === 'number') {
            delete node[prop];
        } else if (typeof node[prop] === 'object' && node[prop] !== null) {
            deleteNumbers(node[prop]);
        }
    }
}

module.exports = function jsonLoader(content) {
    const json = JSON.parse(content.slice(PREFIX_LENGTH, -1));
    deleteNumbers(json);
    return `${PREFIX}${JSON.stringify(json)};`;
};
