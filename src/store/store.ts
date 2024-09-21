import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import operatorsReducer from "./reducers/OperatorsSlice";
import rootSaga from "./sagas";


const rootReducer = combineReducers({
    operators: operatorsReducer
});
const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    })
}
export const store = setupStore();

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
