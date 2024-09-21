import { takeLatest, put, call, all } from 'redux-saga/effects';
import { getTableOperatorAddons, getTableOperators } from '../../api';
import { 
    operatorAddonsFetching, 
    operatorAddonsFetchingSuccess, 
    operatorsFetching, 
    operatorsFetchingError, 
    operatorsFetchingSuccess 
} from '../reducers/OperatorsSlice';


function* handleOperatorsFetching() {
    try {
        const {data} = yield call(getTableOperators);
        yield put(operatorsFetchingSuccess(data));
    } catch (error: any) {
        yield put(operatorsFetchingError(error.message));
    }
}

function* handleOperatorAddonsFetching() {
    try {
        const {data} = yield call(getTableOperatorAddons);
        yield put(operatorAddonsFetchingSuccess(data));
    } catch (error: any) {
        yield put(operatorsFetchingError(error.message));
    }
}

function* operatorsSaga() {
    yield takeLatest(operatorsFetching.type, handleOperatorsFetching);
    yield takeLatest(operatorAddonsFetching.type, handleOperatorAddonsFetching);
}

export default function* rootSaga() {
    yield all([operatorsSaga()]);
}
