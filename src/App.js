import { useState } from 'react'
import './App.css';

// router
import { Route, Routes } from 'react-router-dom'

//local components
import { Archive, Dashboard, Home, Label, Login, Trash } from 'pages/pagesGlobalExport';
import { Navbar, RequiresAuth, Sidebar } from 'components/componentExport';
import PageNotFound from 'pages/pageNotFound/PageNotFound';

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
        <Route path='/archive' element={
          <RequiresAuth>
            <Sidebar isSidearVisible={isSidearVisible}>
              <Archive />
            </Sidebar>
          </RequiresAuth>} />
        <Route path='/trash' element={
          <RequiresAuth>
            <Sidebar isSidearVisible={isSidearVisible}>
              <Trash />
            </Sidebar>
          </RequiresAuth>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
