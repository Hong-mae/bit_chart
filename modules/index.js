import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import bitCoinCharts, { bitCoinsSaga } from './bitCoinCharts';
import loading from './loading';

const rootReducer = combineReducers({
    bitCoinCharts,
    loading
});

export function* rootSaga() {
    yield all([bitCoinsSaga()]);
}

export default rootReducer;
