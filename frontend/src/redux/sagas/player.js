import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { getDevice } from "../../axios/requests";
import { PLAY_MEDIA, GET_DEVICE } from "../constants/player";

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

export default function* rootSaga() {
    yield all([
        fork(getDeviceSaga),
    ]);
}