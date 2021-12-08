const { Slider, Direction, Button, PlayerIcon } = require('react-player-controls')
const { RiPlayFill, RiPauseCircleFill, RiStopCircleFill, RiSkipBackFill, RiSkipForwardFill } = require('react-icons/ri');

export const Player = () => {
    return <div>
        <Button>
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
    </div>
}