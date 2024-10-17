import './App.css';
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage.js"
import "./styles/Formulas.css";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  const darkModeName = "Dark mode";
  const lightModeName = "Light mode";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <input
        id="mode-toggle"
        type="checkbox"
        onClick={toggleDarkMode}
      />
      <label htmlFor="mode-toggle">{darkMode ? lightModeName : darkModeName}</label>
    </div>
  );
}

export default App;
