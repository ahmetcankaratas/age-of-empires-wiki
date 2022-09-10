import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

import filterReducer from "./filterReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(filterReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
