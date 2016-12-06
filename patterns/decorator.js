/* eslint no-console: 0 */
const SYSTEM_PROPS = ['constructor'];

function prototypeCopy(obj, log) {
    const prototype = Object.getPrototypeOf(obj);
    if (prototype) {
        prototypeCopy.bind(this)(prototype, log);// copy with inheritance
    }

    for (const prop of Object.getOwnPropertyNames(obj)) {
        if (!(prop in SYSTEM_PROPS)) {
            if (typeof obj[prop] === 'function') {
                this[prop] = (...args) => {
                    const result = obj[prop].bind(this)(...args);
                    log(`Method ${prop} was called, parameters are "${JSON.stringify(args)}", result is "${JSON.stringify(result)}"`);
                    return result;
                };
            } else {
                this[prop] = obj[prop];
            }
        }
    }
}

class Logger {
    constructor(obj, log = console.log) {
        prototypeCopy.bind(this)(obj, log);
    }
}

export default Logger;
