import './App.css';

// router
import { Route, Routes } from 'react-router-dom'
import { Navbar } from 'components/componentExport';
import { Dashboard, Home } from 'pages/pagesGlobalExport';

//local components

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
