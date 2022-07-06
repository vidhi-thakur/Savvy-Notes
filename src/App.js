import { useState } from 'react'
import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import { Dashboard, Home, Label, Login } from 'pages/pagesGlobalExport';
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
        <Route path="/label" element={
          <RequiresAuth>
            <Sidebar isSidearVisible={isSidearVisible}>
              <Label />
            </Sidebar>
          </RequiresAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1 style={{ margin: "5rem auto", textAlign: "center" }}>Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
