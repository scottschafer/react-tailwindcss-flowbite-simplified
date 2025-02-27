import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { initFlowbiteHelper } from './flowbiteHelper';
import 'flowbite';
import { initPopovers, initTooltips } from 'flowbite';

// Page components
import MUIPage from './pages/MUIPage';
import FlowbiteHTMLPage from './pages/FlowbiteHTMLPage';
import FlowbiteReactPage from './pages/FlowbiteReactPage';
import Contact from './pages/Contact';
import { NavLinks } from './components/Navlinks';

function App() {

  initFlowbiteHelper();

  // dark mode toggle
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, []);

  const toggleDarkMode = () => {
    darkMode ?
      document.documentElement.classList.remove('dark') :
      document.documentElement.classList.add('dark');

    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div>

    <Router>
      <div className="App flex flex-col p-lg">
        
        {/* Navigation and Dark Mode Toggle */}
        <nav className="mb-4">
          <div className="stack-h gap-lg items-center">
            <NavLinks links={[{
              pathname: '/', title: 'Flowbite HTML'},
              {pathname: '/flowbitereact', title: 'Flowbite React'},
              {pathname: '/mui', title: 'MUI'}]} />
            
            {/* Dark mode toggle */}
            <div className="stack-h gap-md items-center ml-auto">
              <button className="sm" onClick={toggleDarkMode}>
                {`Switch to ${darkMode ? 'light' : 'dark'} mode`}</button>

            {/* <label>Switch theme: </label>
              <button className="sm" onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</button> */}
            </div>
          </div>
        </nav>

        <div>
          <Routes>
          <Route path="/" element={<FlowbiteHTMLPage />} />
          <Route path="/flowbitereact" element={<FlowbiteReactPage />} />
          <Route path="/mui" element={<MUIPage darkMode={darkMode} />} />
          </Routes>
        </div>
      </div>

    </Router>
    </div>

  );
}

export default App;
