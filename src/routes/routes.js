const express = require('express');
const router = express.Router();
const { playMedia, pauseMedia, resumeMedia, stopMedia, stopCast, seek } = require('../functions/functions');

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

module.exports = router;