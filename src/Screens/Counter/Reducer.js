export default Reducer = (state = 0, action) => {
    if (typeof state === 'undefined') {
      state = 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}
