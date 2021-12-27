import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { getDevice, getIP, setVolume } from "../../axios/requests";
import { PLAY_MEDIA, GET_DEVICE, GET_IP_SUCCESS, GET_IP, SET_VOLUME } from "../constants/player";
import { message } from 'antd';

export function* getDeviceSaga() {
    yield takeEvery(PLAY_MEDIA, function* ({ payload }) {
        message.info('Attempting to cast media...');
        try {

            const device = yield getDevice()

            if (device) {
                yield put({ type: GET_DEVICE, payload: device });
                message.success(`Casting on ${device}`);
            }
            message.error('There was a problem...maybe your device is not turned on?');
        } catch (err) {
            console.log(err.message);
            message.error(err.message);
        }
    });
}

export function* setVolumeSaga() {
    yield takeEvery(SET_VOLUME, function* ({ payload }) {
        try {

            const level = yield setVolume(payload)
        } catch (err) {
            console.log(err.message);
            message.error(err.message);
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
            message.error(err.message);
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(getDeviceSaga),
        fork(getIPSaga),
        fork(setVolumeSaga),
    ]);
}