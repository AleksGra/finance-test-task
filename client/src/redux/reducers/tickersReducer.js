import {io} from "socket.io-client";

const initialState = {tickersList: [], isLoading: false, isError: false, watchingList: []};
const tickersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TICKERS_LIST":
            return {
                ...state,
                tickersList: action.payload,
            };

        case "ADD_TICKERS":
            return {
                ...state,
                watchingList: !state.watchingList.some(item => item.ticker === action.payload.ticker)
                    ? [...state.watchingList, action.payload]
                    : [...state.watchingList],
            };
        case "DELETE_TICKERS":
            return {
                ...state,
                watchingList: state.watchingList.filter(arr => arr.ticker !== action.payload.ticker)
                ,
            };
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "SET_IS_ERROR":
            return {
                ...state,
                isError: action.payload,
            };

        default:
            return state;
    }
};

export const actions = {
    setTickersList: (response) => ({
        type: "SET_TICKERS_LIST",
        payload: response,
    }),
    addTickers: (ticker) => ({
        type: "ADD_TICKERS",
        payload: ticker,
    }),
    deleteTickers: (data) => ({
        type: "DELETE_TICKERS",
        payload: data,
    }),
    toggleIsLoading: (data) => ({
        type: "SET_IS_LOADING",
        payload: data,
    }),
    toggleIsError: (data) => ({
        type: "SET_IS_ERROR",
        payload: data,
    }),
};
export const setDataRedux = () => {
    return (dispatch) => {
        dispatch(actions.toggleIsLoading(true));
        const URL = "http://localhost:4000";
        const socket = io(URL, {autoConnect: true});
        socket.emit("start");
        socket.on("ticker", function (response) {
            !!response
                ? dispatch(actions.setTickersList(response))
                : dispatch(actions.toggleIsError(true));
            dispatch(actions.toggleIsLoading(false));
        });
    };
};

export default tickersReducer;
