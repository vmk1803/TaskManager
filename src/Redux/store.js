import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux"
import rootSaga from "../ReduxSaga/rootSaga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store