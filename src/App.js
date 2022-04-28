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
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
