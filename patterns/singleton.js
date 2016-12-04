const Singleton = (() => {
    const instance = {};
    return function Single() {
        return instance;
    };
})();

export default Singleton;
