import { openAlert } from 'simple-react-alert';
const axios = require("axios");

const API_URL = 'http://localhost:5000' // Base URL of the Node API

export async function playMedia(payload) {
    const config = {
        method: "post",
        url: `${API_URL}/api/play-media`,
        data: { mediaUrl: payload },
    };
    try {
        openAlert({ message: 'Trying to cast to your device. Patience, please...', type: 'info', duration: 4000 });
        let res = await axios(config);
        openAlert({ message: 'Casting to your device!', type: 'success' });
        console.log(res.status);
    } catch (error) {
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function pauseMedia() {
    const config = {
        method: "post",
        url: `${API_URL}/api/pause-media`,
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Media paused', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function stopMedia() {
    const config = {
        method: "post",
        url: `${API_URL}/api/stop-media`,
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Media stopped', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function resumeMedia() {
    const config = {
        method: "post",
        url: `${API_URL}/api/resume-media`,
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Resuming media', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function seekSeconds(payload) {
    const config = {
        method: "post",
        url: `${API_URL}/api/seek-seconds`,
        data: { seconds: payload },
    };
    try {
        let res = await axios(config);
        if (payload < 0) {
            openAlert({ message: 'Moving backwards 5 seconds...', type: 'success' });
        }
        openAlert({ message: 'Moving forward 5 seconds...', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function goTo(payload) {
    const config = {
        method: "post",
        url: `${API_URL}/api/go-to`,
        data: { seconds: payload },
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Going to specified time', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function setVolume(payload) {
    const config = {
        method: "post",
        url: `${API_URL}/api/set-volume`,
        data: { level: payload },
    };
    try {
        let res = await axios(config);
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function stopCast() {
    const config = {
        method: "post",
        url: `${API_URL}/api/stop-cast`,
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Stopped casting from device', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function getDevice() {
    const config = {
        method: "get",
        url: `${API_URL}/api/device-info`,
    };
    try {
        let res = await axios(config);
        let device = res.data.device.friendlyName
        console.log('Device name', device);
        return device
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}

export async function getIP() {
    const config = {
        method: "get",
        url: `${API_URL}/api/local-ip`,
    };
    try {
        let res = await axios(config);
        let ip = res.data.local_ip
        console.log('Local ip', ip);
        return ip
    } catch (error) {
        console.error(error.response.data.msg);
        openAlert({ message: error.response.data.msg, type: 'error' });
    }
}