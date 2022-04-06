import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
