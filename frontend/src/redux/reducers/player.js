import {
    GET_MEDIA, PLAY_MEDIA
} from '../constants/player';

const initialState = {
    media: [],
    playing: false
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
            }
        default:
            return state
    }
}