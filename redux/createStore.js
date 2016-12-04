export default function createStore(reducer) {
    const listeners = [];
    let state;

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener);

        return function unsubscribe() {
            listeners.splice(listeners.indexOf(listener), 1);
        };
    }

    function dispatch(action) {
        state = reducer(state, action);

        for (const listener of listeners) {
            listener();
        }
    }

    return {
        getState,
        subscribe,
        dispatch,
    };
}
