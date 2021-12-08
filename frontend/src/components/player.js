import { useEffect } from 'react';
import store from '../redux/store';
import { PLAY_MEDIA } from '../redux/constants/player';
import { playMediaAction } from '../redux/actions/player';
const { Slider, Direction, Button, PlayerIcon } = require('react-player-controls')
const { RiPlayFill, RiPauseCircleFill, RiStopCircleFill, RiSkipBackFill, RiSkipForwardFill } = require('react-icons/ri');
const { PropTypes } = require('prop-types');
const { connect } = require('react-redux');
const { playMedia } = require('../axios/requests');

const handleOnClick = (media) => {
    playMedia(media);
}

export const Player = ({ url }) => {
    return <div>
        <Button onClick={() => { handleOnClick(store.getState().player.media); console.log('Media is: ', url) }} >
            <RiPlayFill size={30} />
        </Button>
        <Button>
            <RiPauseCircleFill size={30} />
        </Button>
        <Button>
            <RiSkipBackFill size={30} />
        </Button>
        <Button>
            <RiSkipForwardFill size={30} />
        </Button>
    </div >
}

Player.propTypes = {
    media: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    url: state.player.media
});

const mapDispatchToProps = (dispatch) => {
    return {
        playMediaAction: () => dispatch(playMediaAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);