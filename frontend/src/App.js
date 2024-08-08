import NavBar from "./components/UI/NavBar"
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRouter from "./components/AppRouter";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
    </div> 
  );
}

export default App;
