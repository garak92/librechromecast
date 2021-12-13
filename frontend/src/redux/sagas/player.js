import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { getDevice, getIP } from "../../axios/requests";
import { PLAY_MEDIA, GET_DEVICE, GET_IP_SUCCESS, GET_IP } from "../constants/player";

export function* getDeviceSaga() {
    yield takeEvery(PLAY_MEDIA, function* ({ payload }) {

        try {

            const device = yield getDevice()

            if (device) {
                yield put({ type: GET_DEVICE, payload: device });
            }
        } catch (err) {
            console.log(err.message);
        }
    });
}

export function* getIPSaga() {
    yield takeEvery(GET_IP, function* () {

        try {

            const ip = yield getIP();

            if (ip) {
                yield put({ type: GET_IP_SUCCESS, payload: ip });
            }
        } catch (err) {
            console.log(err.message);
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(getDeviceSaga),
        fork(getIPSaga),
    ]);
}