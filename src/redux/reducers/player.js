import {
    GET_MEDIA,
    PLAY_MEDIA,
    PAUSE_MEDIA,
    RESUME_MEDIA,
    STOP_MEDIA,
    STOP_CAST,
    SEEK_SECONDS,
    GET_DEVICE,
    GET_IP,
    GET_IP_SUCCESS,
    GET_SUBS,
    GO_TO,
    PLAY_MEDIA_SUCCESS
} from '../constants/player';

const initialState = {
    media: [],
    playing: false,
    device: [],
    casting: false,
    ip: [],
    subs: []
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
                ...state
            }
        case PLAY_MEDIA_SUCCESS:
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
                playing: false
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
        case GET_IP:
            return {
                ...state
            }
        case GET_IP_SUCCESS:
            return {
                ...state,
                ip: payload
            }
        case GET_SUBS:
            return {
                ...state,
                subs: payload
            }
        case GO_TO:
            return {
                ...state,
                subs: payload
            }
        default:
            return state
    }
}