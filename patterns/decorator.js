/* eslint no-console: 0 */
class Logger {
    constructor(obj, log = console.log) {
        for (const prop of Object.keys(obj)) {
            if (typeof obj[prop] === 'function') {
                this[prop] = (...args) => {
                    const result = obj[prop](...args);
                    log(`Method ${prop} was called, parameters are "${JSON.stringify(args)}", result is "${JSON.stringify(result)}"`);
                    return result;
                };
            }
        }
    }
}

export default Logger;
