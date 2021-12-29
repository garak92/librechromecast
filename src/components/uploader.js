import { useEffect } from 'react';
import { getMediaAction, getIPAction, getSubsAction } from '../redux/actions/player';
import React from 'react';
const Player = require('./player');
const { PropTypes } = require('prop-types');
const { connect } = require('react-redux');

// Event handlers

const onChangeHandler = (e) => {
    return e.target.value;
}

const uploadFileHandler = (e, ip) => {
    const file = 'http://' + ip + ':5000' + e.target.files[0].path;
    console.log('My file is:', e.target.files[0].path);
    return file;
};

// Component definition

export const Uploader = ({ getMediaAction, getIPAction, getSubsAction, ip }) => {
    useEffect(() => getIPAction(), [ip]); // Necessary for the chromcast to be able to see your local files
    return <form encType="multipart/form-data">
        <section className='section2'>
            <label htmlFor="localfiles" >Select a local video file </label>
            <input id="localfiles" type="file" accept="video/*" onChange={(e) => { getMediaAction(uploadFileHandler(e, ip)) }} />
        </section>
        <section className='section1'>
            <h2>Other options</h2>
            <label htmlFor="subs">Add a subtitle file </label>
            <input id="subs" type="file" onChange={(e) => { getSubsAction(uploadFileHandler(e, ip)) }} />
            <label htmlFor="files">Input a video url </label>
            <input id="files" type="url" onChange={(e) => { getMediaAction(onChangeHandler(e)) }} />
        </section>
    </form>
}

// Connection with Redux store

Uploader.propTypes = {
    getMediaAction: PropTypes.func.isRequired,
    getIPAction: PropTypes.func.isRequired,
    ip: PropTypes.array.isRequired

}
const mapStateToProps = (state) => ({
    ip: state.player.ip
});

const mapDispatchToProps = (dispatch) => {
    return {
        getMediaAction: (payload) => dispatch(getMediaAction(payload)),
        getIPAction: () => dispatch(getIPAction()),
        getSubsAction: (payload) => dispatch(getSubsAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);