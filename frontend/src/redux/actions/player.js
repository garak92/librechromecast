import {
    GET_MEDIA,
    PLAY_MEDIA,
    PAUSE_MEDIA,
    STOP_MEDIA,
    RESUME_MEDIA,
    STOP_CAST,
    SEEK_SECONDS,
    GET_DEVICE,
    GET_IP,
    GET_IP_SUCCESS,
    GET_SUBS
} from '../constants/player';

export const getMediaAction = (payload) => {
    return {
        type: GET_MEDIA,
        payload: payload
    }
}

export const seekSecondsAction = (payload) => {
    return {
        type: SEEK_SECONDS,
        payload: payload
    }
}

export const playMediaAction = () => {
    return {
        type: PLAY_MEDIA
    }
}

export const pauseMediaAction = () => {
    return {
        type: PAUSE_MEDIA
    }
}

export const stopMediaAction = () => {
    return {
        type: STOP_MEDIA
    }
}

export const stopCastAction = () => {
    return {
        type: STOP_CAST
    }
}

export const resumeMediaAction = () => {
    return {
        type: RESUME_MEDIA
    }
}

export const getDeviceAction = (payload) => {
    return {
        type: GET_DEVICE,
        payload: payload
    }
}

export const getIPAction = () => {
    return {
        type: GET_IP,
    }
}

export const getIPSuccessAction = (payload) => {
    return {
        type: GET_IP_SUCCESS,
        payload: payload
    }
}

export const getSubsAction = (payload) => {
    return {
        type: GET_SUBS,
        payload: payload
    }
}