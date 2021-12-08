import {
    GET_MEDIA,
    PLAY_MEDIA
} from '../constants/player';
const { playMedia } = require('../../axios/requests');

export const getMediaAction = (payload) => {
    return {
        type: GET_MEDIA,
        payload: payload
    }
}

export const playMediaAction = () => {
    return {
        type: PLAY_MEDIA
    }
}