import './App.css';
import Player from './components/player';
import Uploader from './components/uploader';
import { Provider } from 'react-redux';
import store from './redux/store';
import Volume from './components/volume';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className='uploaderDiv'>
        <h1>Welcome to Librechromecast!</h1>
        <Uploader></Uploader>
        <Player></Player>
      </div>
    </div >
  </Provider>
)

export default App;
