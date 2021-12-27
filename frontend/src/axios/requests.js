import { openAlert } from 'simple-react-alert';
const axios = require("axios");

export async function playMedia(payload) {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/play-media",
        data: { mediaUrl: payload },
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Casting...', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function pauseMedia() {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/pause-media",
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Media paused', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function stopMedia() {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/stop-media",
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Media stopped', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function resumeMedia() {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/resume-media",
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Resuming media', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function seekSeconds(payload) {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/seek-seconds",
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
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function goTo(payload) {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/go-to",
        data: { seconds: payload },
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Going to specified time', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function setVolume(payload) {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/set-volume",
        data: { level: payload },
    };
    try {
        let res = await axios(config);
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function stopCast() {
    const config = {
        method: "post",
        url: "http://localhost:5000/api/stop-cast",
    };
    try {
        let res = await axios(config);
        openAlert({ message: 'Stopped casting from device', type: 'success' });
        console.log(res.status);
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function getDevice() {
    const config = {
        method: "get",
        url: "http://localhost:5000/api/device-info",
    };
    try {
        let res = await axios(config);
        let device = res.data.device.friendlyName
        console.log('Device name', device);
        return device
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}

export async function getIP() {
    const config = {
        method: "get",
        url: "http://localhost:5000/api/local-ip",
    };
    try {
        let res = await axios(config);
        let ip = res.data.local_ip
        console.log('Local ip', ip);
        return ip
    } catch (error) {
        console.error(error.message);
        openAlert({ message: error.message, type: 'error' });
    }
}