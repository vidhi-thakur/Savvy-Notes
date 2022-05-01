import { useState } from 'react'
import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import { Dashboard, Home, Login } from 'pages/pagesGlobalExport';
import { Navbar, RequiresAuth, Sidebar } from 'components/componentExport';

function App() {
  const [isSidearVisible, setIsSidearVisible] = useState(false)
  return (
    <div className="App">
      <Navbar setIsSidearVisible={setIsSidearVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <RequiresAuth>
            <Sidebar isSidearVisible={isSidearVisible}>
              <Dashboard />
            </Sidebar>
          </RequiresAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
