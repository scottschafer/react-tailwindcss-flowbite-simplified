import { useState, useEffect } from 'react';
import './App.css';
import { initFlowbiteHelper } from './flowbiteHelper';
import 'flowbite';


function App() {

  initFlowbiteHelper()
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
    <div className="App flex p-lg">

      <div className="stack-v gap-lg w-full">

        {/* Dark mode toggle */}
        <div className="stack-h gap-md items-center justify-end">
          <label>Switch theme: </label>
          <button className="sm" onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</button>
        </div>

        {
          ['', 'sm', 'lg'].map(size => (
            <div className="stack-v gap-md w-full items-center" key={`size-${size}`}>
              <label>Buttons {size ? `(${size})` : ''}</label>
              <div className="stack-h gap-md">
                <button title="tooltip" className={`primary ${size}`}>primary</button>
                <button className={`secondary ${size}`}>secondary</button>
                <button className={`text ${size}`}>text</button>
                <button className={`warning icon-error ${size}`}>warning</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
