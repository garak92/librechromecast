import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import {
    playMediaAction,
    seekSecondsAction,
    resumeMediaAction,
    pauseMediaAction,
    stopCastAction,
    stopMediaAction,
    getDeviceAction,
    goToAction
} from '../redux/actions/player';
import Volume from './volume';
import Alert from 'simple-react-alert';
const { button } = require('react-player-controls')
const { RiPlayFill, RiPauseCircleFill, RiStopCircleFill, RiSkipBackFill, RiSkipForwardFill, RiCastLine, RiCastFill } = require('react-icons/ri');
const { PropTypes } = require('prop-types');
const { connect } = require('react-redux');
const { playMedia,
    resumeMedia,
    pauseMedia,
    stopMedia,
    stopCast,
    getDevice,
    seekSeconds,
    goTo
} = require('../axios/requests');

// How many seconds will the seek buttons move
const seconds = 5;

// Event handlers

const handleOnClickPlay = (media, subs) => {
    if (!media) {
        return;
    }
    if (subs.length == 0) {
        return playMedia(media);
    } else {
        const mediaObject = {
            url: media,
            subtitles: [
                {
                    language: '',
                    url: subs,
                    name: '',
                }
            ],
            cover: {
                title: 'Playing your media...',
                url: ''
            },
            subtitles_style: {
                backgroundColor: '#FFFFFF00',
                foregroundColor: '#FFFFFFFF',
                edgeType: 'OUTLINE',
                edgeColor: '#000000FF',
                fontScale: 1.2,
                fontStyle: 'BOLD',
                fontFamily: 'Droid Sans',
                fontGenericFamily: 'SANS_SERIF',
            }
        }
        return playMedia(mediaObject);
    }
}

const handleOnClickPause = () => {
    pauseMedia();
}

const handleOnClickStop = (casting) => {
    if (casting) {
        return;
    }
    stopMedia();
}

const handleOnClickStopCast = (casting) => {
    if (casting) {
        return;
    }
    stopCast();
}

const handleOnClickSeekForward = (seconds, playing) => {
    if (playing) {
        return;
    }
    seekSeconds(seconds);
}

const handleOnClickSeekBackward = (seconds, playing) => {
    if (playing) {
        return;
    }
    seekSeconds(seconds * -1);
}

const handleOnClickResume = () => {
    resumeMedia();
}

const handleOnClickGoTo = (seconds) => {
    const secondsFormatted = moment.duration(seconds).asSeconds();
    goTo(secondsFormatted);
}

export const Player = ({ url, playing, device, casting, subs, playMediaAction, pauseMediaAction, resumeMediaAction, stopMediaAction, stopCastAction, getDevice }) => {
    const [timeValue, setTime] = useState('00:00:00');
    return <div>
        {casting ? <h3>Casting on {device}</h3> : null}
        {casting ?
            playing ? <button title="Pause current media" onClick={() => { handleOnClickPause(); pauseMediaAction(); }}>
                <RiPauseCircleFill size={30} />
            </button> : <button title="Resume playing current media" onClick={() => { handleOnClickResume(); resumeMediaAction(); }}>
                <RiPlayFill size={30} />
            </button>
            : null}
        <button title="Stop casting current media" onClick={() => { handleOnClickStop(casting); stopMediaAction(); }}>
            <RiStopCircleFill size={30} />
        </button>
        <button title="Skip 5 seconds before" onClick={() => { handleOnClickSeekBackward(seconds, playing); }}>
            <RiSkipBackFill size={30} />
        </button ><button title="Skip 5 seconds forward" onClick={() => { handleOnClickSeekForward(seconds, playing); }}>
            <RiSkipForwardFill size={30} />
        </button>
        <Alert></Alert>
        <div className='section3'>
            <label>Start casting</label>
            <button title="Start casting selected media, click here every time you change media" onClick={() => { handleOnClickPlay(url, subs); playMediaAction(); getDevice(); }} >
                <RiCastFill size={30} />
            </button>
            <label>Stop casting</label>
            <button title="Disconnect from your chromecast device" onClick={() => { handleOnClickStopCast(casting); stopCastAction(); }}>
                <RiCastLine size={30} />
            </button>
            <Volume></Volume>
            <input type='time' onChange={(e) => { setTime(e.target.value); console.log('The time is', timeValue) }}></input>
            <button onClick={(e) => handleOnClickGoTo(timeValue)}>GO</button>
        </div>
    </div>

}

Player.propTypes = {
    media: PropTypes.array.isRequired,
    playing: PropTypes.bool.isRequired,
    device: PropTypes.array.isRequired,
    casting: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    url: state.player.media,
    playing: state.player.playing,
    casting: state.player.casting,
    device: state.player.device,
    subs: state.player.subs
});

const mapDispatchToProps = (dispatch) => {
    return {
        playMediaAction: () => dispatch(playMediaAction()),
        pauseMediaAction: () => dispatch(pauseMediaAction()),
        resumeMediaAction: () => dispatch(resumeMediaAction()),
        stopMediaAction: () => dispatch(stopMediaAction()),
        stopCastAction: () => dispatch(stopCastAction()),
        getDeviceAction: () => dispatch(getDeviceAction()),
        getDevice: () => getDevice(),
        goTo: () => goToAction()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);