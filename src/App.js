import { useState } from 'react'
import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import { Dashboard, Home, Login } from 'pages/pagesGlobalExport';
import { Navbar, Sidebar } from 'components/componentExport';

// helpers
import RequiresAuth from 'helpers/auth/RequiresAuth';

function App() {
  const [isSidearVisible, setIsSidearVisible] = useState(false)
  const [isUserLoggenIn, setIsUserLoggenIn] = useState(true)
  return (
    <div className="App">
      <Navbar setIsSidearVisible={setIsSidearVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <RequiresAuth login={isUserLoggenIn}>
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
