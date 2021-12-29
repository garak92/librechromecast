import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { setVolumeAction } from '../redux/actions/player';
import { connect } from 'react-redux';
import React from 'react';

const ContinuousSlider = ({ setVolumeAction, playing }) => {
    const [value, setValue] = useState(0.50);

    const handleChange = (e, volume) => {
        if (!playing) {
            return;
        }
        const volumeNormalized = () => {
            if (volume == 0) {
                return 0;
            } else {
                return volume / 100;
            }
        }
        setValue(volumeNormalized);
        console.log(value)

    }

    const handleOnChangeComitted = (e, value, playing) => {
        console.log('playing?', playing)
        if (!playing) {
            return;
        } else {
            setVolumeAction(value);
        }
    }

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleChange}
                    onChangeCommitted={(e) => handleOnChangeComitted(e, value, playing)}
                />
                <VolumeUp />
            </Stack>
        </Box>
    );
}

const mapStateToProps = (state) => ({
    playing: state.player.playing
});

const mapDispatchToProps = (dispatch) => {
    return {
        setVolumeAction: (payload) => dispatch(setVolumeAction(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContinuousSlider);