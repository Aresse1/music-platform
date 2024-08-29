import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from './components/UI/Header';
import { TrackPanel } from './components/TrackPanel';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <AppRouter/>
          <TrackPanel/>
        </BrowserRouter>
      </Provider>
    </div> 
  );
}

export default App






