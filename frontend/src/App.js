import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Header from './components/UI/Header';
import { TrackPanel } from './components/pages/TrackPanel';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <TrackPanel />
      <AppRouter/>
    </BrowserRouter>
    </div> 
  );
}

export default App;
