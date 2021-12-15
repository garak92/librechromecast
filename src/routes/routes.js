const express = require('express');
const router = express.Router();
const { playMedia, pauseMedia, resumeMedia, stopMedia, stopCast, seek, setVolume, setTime, getTime } = require('../functions/functions');
const localIpV4Address = require("local-ipv4-address");

router.post('/stop-cast', async (req, res) => {
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    stopCast(device);
    return res.status(200).json({ msg: "You have finished casting!" });
})

router.post('/play-media', async (req, res) => {
    const client = req.app.get('client');
    const { mediaUrl } = req.body;
    if (!mediaUrl) {
        return res.status(400).json({ msg: "Please, select a media to cast" });
    }
    const device = client.devices[0];
    const deviceName = device.name;
    if (!deviceName.includes('googlecast')) {
        return res.status(400).json({ msg: "A device was found, but it is not a chromecast!" })
    }
    playMedia(device, mediaUrl);
    return res.status(200).json({ msg: "Playing media!" });

})

router.post('/pause-media', async (req, res) => {
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    pauseMedia(device);
    return res.status(200).json({ msg: "Media paused!" });
})

router.post('/resume-media', async (req, res) => {
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    resumeMedia(device);
    return res.status(200).json({ msg: "Media resumed!" });
})

router.post('/stop-media', async (req, res) => {
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    stopMedia(device);
    return res.status(200).json({ msg: "Media stopped!" });
})

router.post('/seek-seconds', async (req, res) => {
    const { seconds } = req.body;
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    if (!seconds) {
        return res.status(400).json({ msg: "Number of seconds unspecified!" });
    }
    seek(device, seconds);
    return res.status(200).json({ msg: "Seeking!" });
})

router.post('/set-volume', async (req, res) => {
    const { level } = req.body;
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    if (!level) {
        return res.status(400).json({ msg: "Volume level unspecified!" });
    }
    setVolume(device, level);
    return res.status(200).json({ msg: "Changing volume!" });
})

router.post('/set-time', async (req, res) => {
    const { seconds } = req.body;
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    if (!seconds) {
        return res.status(400).json({ msg: "Second unspecified!" });
    }
    setTime(device, seconds);
    return res.status(200).json({ msg: "Going into specified time!" });
})

router.get('/device-info', async (req, res) => {
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    return res.status(200).json({ device });
})

router.get('/client-info', async (req, res) => {
    const client = req.app.get('client');
    if (!client) {
        return res.status(400).json({ msg: "No client started!" });
    }
    return res.status(200).json({ client });
})

router.get('/local-ip', async (req, res) => {
    try {
        const ip = await localIpV4Address().then(function (ipAddress) {
            return ipAddress;
        });
        return res.status(200).json({ local_ip: ip });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
})

router.get('/current-time', async (req, res) => {
    const client = req.app.get('client');
    const device = client.devices[0];
    if (!device) {
        return res.status(400).json({ msg: "No device found!" });
    }
    const currentTime = getTime(device);
    return res.status(200).json({ currentTime: currentTime });
})

module.exports = router;