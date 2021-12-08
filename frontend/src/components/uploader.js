import store from '../redux/store';
import { getMediaAction } from '../redux/actions/player';
const Player = require('./player');
const { PropTypes } = require('prop-types');
const { connect } = require('react-redux');

const onChangeHandler = (e) => {
    return e.target.value;
}

export const Uploader = ({ getMediaAction }) => {
    return <form>
        <section className='section2'>
            <label htmlFor="files" >Select a local video file </label>
            <input id="files" type="file" />
        </section>
        <section className='section1'>
            <h2>Other options</h2>
            <label htmlFor="files">Add a subtitle file </label>
            <input id="files" type="file" />
            <label htmlFor="files">Input a video url </label>
            <input id="files" type="url" onChange={(e) => { getMediaAction(onChangeHandler(e)) }} />
        </section>
    </form>
}

Uploader.propTypes = {
    getMediaAction: PropTypes.func.isRequired

}

const mapDispatchToProps = (dispatch) => {
    return {
        getMediaAction: (payload) => dispatch(getMediaAction(payload)),
    }
}

export default connect(null, mapDispatchToProps)(Uploader);