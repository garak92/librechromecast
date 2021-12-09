import {
    GET_MEDIA,
    PLAY_MEDIA,
    PAUSE_MEDIA,
    RESUME_MEDIA,
    STOP_MEDIA,
    STOP_CAST,
    SEEK_SECONDS,
    GET_DEVICE
} from '../constants/player';

const initialState = {
    media: [],
    playing: false,
    device: [],
    casting: false
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_MEDIA:
            return {
                ...state,
                media: payload,
            }
        case PLAY_MEDIA:
            return {
                ...state,
                playing: true,
                casting: true
            }
        case PAUSE_MEDIA:
            return {
                ...state,
                playing: false,
            }
        case STOP_MEDIA:
            return {
                ...state,
                playing: false,
                casting: false
            }
        case RESUME_MEDIA:
            return {
                ...state,
                playing: true,
            }
        case STOP_CAST:
            return {
                ...state,
                playing: false,
                casting: false
            }
        case SEEK_SECONDS:
            return {
                ...state
            }
        case GET_DEVICE:
            return {
                ...state,
                device: payload
            }
        default:
            return state
    }
}