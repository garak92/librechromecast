// This file contains all of the basic functions that are then called on the endpoints

function stopCast(device) {
    device.close(() => console.log('Stopped casting'));
}

function playMedia(device, media) {
    device.play(media, function (err) {
        if (!err) console.log('Playing in your chromecast')
    })
}

function pauseMedia(device) {
    device.pause(() => console.log('Media paused'));
}

function resumeMedia(device) {
    device.resume(() => console.log('Resuming media'));
}

function stopMedia(device) {
    device.stop(() => console.log('Stopped media'));
}

function seek(device, seconds) {
    device.seek(seconds, () => console.log(`Going {seconds} seconds`));
}

module.exports = {
    stopMedia, resumeMedia, pauseMedia,
    playMedia, stopCast, seek
};