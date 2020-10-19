import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes
} from '../lib/creasteRequestSaga';
import * as bitCoinsAPI from '../lib/apis/bitcoins';
import { takeLatest } from 'redux-saga/effects';

const [
    BIT_COINS_CHART,
    BIT_COINS_CHART_SUCCESS,
    BIT_COINS_CHART_FAILURE
] = createRequestActionTypes('bitCoins/BIT_COINS_CHART');

export const bitCoinsChart = createAction(BIT_COINS_CHART);

const bitCoinsChartSaga = createRequestSaga(BIT_COINS_CHART, bitCoinsAPI.getChart);
export function* bitCoinsSaga() {
    yield takeLatest(BIT_COINS_CHART, bitCoinsChartSaga);
}

const initialState = {
    status: null,
    datas: null,
    error: null,
}

const bitCoins = handleActions(
    {
        [BIT_COINS_CHART_SUCCESS]: (state, { payload: res }) => ({
            ...state,
            status: res.status,
            datas: res.data
        }),
        [BIT_COINS_CHART_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
)

export default bitCoins;