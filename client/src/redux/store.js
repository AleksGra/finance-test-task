import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import tickersReducer from "./reducers/tickersReducer";

const reducers = combineReducers({
    tickers: tickersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;