import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import { Dashboard, Home } from 'pages/pagesGlobalExport';
import { Navbar } from 'components/componentExport';

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
