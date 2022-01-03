import { all, takeEvery, put, fork } from "redux-saga/effects";
import { getDevice, getIP, setVolume, playMedia } from "../../axios/requests";
import { PLAY_MEDIA, GET_DEVICE, GET_IP_SUCCESS, GET_IP, SET_VOLUME, PLAY_MEDIA_SUCCESS } from "../constants/player";

export function* getDeviceSaga() {
    yield takeEvery(PLAY_MEDIA, function* () {

        try {

            const device = yield getDevice()

            if (!device) {
                return;
            }
            yield put({ type: GET_DEVICE, payload: device });

        } catch (err) {
            console.log(err.message);
        }
    });
}

export function* setVolumeSaga() {
    yield takeEvery(SET_VOLUME, function* ({ payload }) {
        try {

            yield setVolume(payload)
        } catch (err) {
            console.log(err.message);
        }
    });
}

export function* playMediaSaga() {
    yield takeEvery(PLAY_MEDIA, function* ({ payload }) {
        try {

            const play = yield playMedia(payload)
            if (playMedia) {
                yield put({ type: PLAY_MEDIA_SUCCESS });
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
        fork(setVolumeSaga),
        fork(playMediaSaga),
    ]);
}