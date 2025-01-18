import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import  Header  from './components/UI/Header';
import { TrackPanel }from './components/TrackPanel';

function App() {
  const [isTrackPanelVisible, setIsTrackPanelVisible] = useState(false);

  const showTrackPanel = () => {
    setIsTrackPanelVisible(true);
  };

  const hideTrackPanel = () => {
    setIsTrackPanelVisible(false);
  };
  
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
          <div className="main_window">
              <AppRouter/>
          </div>
          <div>
            <div className="player" onClick={showTrackPanel} />
            <TrackPanel isVisible={isTrackPanelVisible} onClose={hideTrackPanel} />
          </div>
         <div className='header'>
            <Header/>
         </div>
        </BrowserRouter>
      </Provider> 
    </div> 
  );
}

export default App






