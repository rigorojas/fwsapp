export default (dispatch) => ({
    increment: () => {
        dispatch({
            type: "INCREMENT",
            payload: 1,
        })
    },
    decrement: () => {
        dispatch({
            type: "DECREMENT",
            payload: 1,
        })
    },
    reset: () => {
        dispatch({
            type: "RESET",
        })
    },
});
