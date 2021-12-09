import { all } from 'redux-saga/effects';
import Player from './player';


export default function* rootSaga() {
    yield all([
        Player()
    ]);
}