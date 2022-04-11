import { useState } from 'react'
import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import { Dashboard, Home } from 'pages/pagesGlobalExport';
import { Navbar, Sidebar } from 'components/componentExport';

function App() {
  const [isSidearVisible, setIsSidearVisible] = useState(false)
  return (
    <div className="App">
      <Navbar setIsSidearVisible={setIsSidearVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Sidebar isSidearVisible={isSidearVisible}>
          <Dashboard />
        </Sidebar>} />
      </Routes>
    </div>
  );
}

export default App;
