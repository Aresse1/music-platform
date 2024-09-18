import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import  Header  from './components/UI/Header';
import { TrackPanel }from './components/TrackPanel';

function App() {
  
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
          <div className="main_window">
            <div className="left_dock">
              <Header/>
            </div>
              <AppRouter/>
          </div>
          <div className="panel">
            <TrackPanel/>
          </div>
        </BrowserRouter>
      </Provider> 
    </div> 
  );
}

export default App






