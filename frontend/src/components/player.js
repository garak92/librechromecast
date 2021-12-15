import { useEffect, useState } from 'react';
import {
    playMediaAction,
    seekSecondsAction,
    resumeMediaAction,
    pauseMediaAction,
    stopCastAction,
    stopMediaAction,
    getDeviceAction
} from '../redux/actions/player';
import Volume from './volume';
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
    seekSeconds
} = require('../axios/requests');

// How many seconds will the seek buttons move
const seconds = 5;

// Event handlers

const handleOnClickPlay = (media, subs) => {
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
    playMedia(mediaObject);
}

const handleOnClickPause = () => {
    pauseMedia();
}

const handleOnClickStop = () => {
    stopMedia();
}

const handleOnClickStopCast = () => {
    stopCast();
}

const handleOnClickSeekForward = (seconds) => {
    seekSeconds(seconds);
}

const handleOnClickSeekBackward = (seconds) => {
    seekSeconds(seconds * -1);
}

const handleOnClickResume = () => {
    resumeMedia();
}

export const Player = ({ url, playing, device, casting, subs, playMediaAction, pauseMediaAction, resumeMediaAction, stopMediaAction, stopCastAction, getDevice }) => {
    return <div>
        {casting ? <h3>Casting on {device}</h3> : null}
        {<h3>Media is {url}</h3>}
        {<h3>Subs are {subs}</h3>}
        {casting ?
            playing ? <button title="Pause current media" onClick={() => { handleOnClickPause(); pauseMediaAction(); }}>
                <RiPauseCircleFill size={30} />
            </button> : <button title="Resume playing current media" onClick={() => { handleOnClickResume(); resumeMediaAction(); }}>
                <RiPlayFill size={30} />
            </button>
            : null}
        <button title="Stop casting current media" onClick={() => { handleOnClickStop(); stopMediaAction(); }}>
            <RiStopCircleFill size={30} />
        </button>
        <button title="Skip 5 seconds before" onClick={() => { handleOnClickSeekBackward(seconds); }}>
            <RiSkipBackFill size={30} />
        </button ><button title="Skip 5 seconds forward" onClick={() => { handleOnClickSeekForward(seconds); }}>
            <RiSkipForwardFill size={30} />
        </button>
        <div className='section3'>
            <label>Start casting</label>
            <button title="Start casting selected media, click here every time you change media" onClick={() => { handleOnClickPlay(url, subs); playMediaAction(); getDevice(); }} >
                <RiCastFill size={30} />
            </button>
            <label>Stop casting</label>
            <button title="Disconnect from your chromecast device" onClick={() => { handleOnClickStopCast(); stopCastAction(); }}>
                <RiCastLine size={30} />
            </button>
            <Volume></Volume>
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
        getDevice: () => getDevice()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);