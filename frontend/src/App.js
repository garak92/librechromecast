import './App.css';
import { Player } from './components/player';
import { Uploader } from './components/uploader';

function App() {
  return (
    <div className="App">
      <div className='uploaderDiv'>
        <h1>Welcome to Librechromecast!</h1>
        <Uploader></Uploader>
        <Player></Player>
      </div>
    </div >
  );
}

export default App;
