// This file contains all of the basic functions that are then called on the endpoints

function stopCast(device) {
    if (!device) {
        console.error('No device found')
        return;
    }
    try {
        device.close(() => console.error('Stopped casting'));
    } catch (error) {
        console.error(error);
    }

}

async function playMedia(device, media) {
    return new Promise((resolve, reject) => {
        try {
            device.play(media, function (err) {
                if (!err) {
                    resolve(true);
                }
                else {
                    reject();
                }
            })
        } catch (error) {
            reject();
            console.error(error);
        }
    })
}

function pauseMedia(device) {
    try {
        device.pause(() => console.error('Media paused'));
    } catch (error) {
        console.error(error);
    }

}

function resumeMedia(device) {
    try {
        device.resume(() => console.error('Resuming media'));
    } catch (error) {
        console.error(error);
    }

}

function stopMedia(device) {
    if (!device) {
        console.error('No device found')
        return;
    }
    try {
        device.stop(() => console.error('Stopped media'));
    } catch (error) {
        console.error(error);
    }

}

function seek(device, seconds) {
    try {
        device.seek(seconds, () => console.error(`Going ${seconds} seconds`));
    } catch (error) {
        console.error(error);
    }

}

function setVolume(device, level) {
    try {
        device.setVolume(level, () => console.error(`Volume set to ${level}`));
    } catch (error) {
        console.error(error);
    }

}

function goTo(device, seconds) {
    try {
        device.seekTo(seconds, () => console.error(`Going to ${seconds} seconds`));
    } catch (error) {
        console.error(error);
    }

}

module.exports = {
    stopMedia, resumeMedia, pauseMedia,
    playMedia, stopCast, seek, setVolume, goTo
};