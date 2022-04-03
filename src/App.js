import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
