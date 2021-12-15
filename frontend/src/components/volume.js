import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { setVolumeAction } from '../redux/actions/player';
import { connect } from 'react-redux';

const ContinuousSlider = ({ setVolumeAction }) => {
    const [value, setValue] = useState(0.3);

    const handleChange = (e, volume) => {
        const volumeNormalized = volume / 100;
        setValue(volumeNormalized);
        console.log(value)

    }

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    defaultValue={0.3}
                    onChange={handleChange}
                    onChangeCommitted={(e) => setVolumeAction(value)}
                />
                <VolumeUp />
            </Stack>
        </Box>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        setVolumeAction: (payload) => dispatch(setVolumeAction(payload)),
    }
}

export default connect(null, mapDispatchToProps)(ContinuousSlider);