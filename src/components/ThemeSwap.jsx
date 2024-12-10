import React, {useState,useEffect} from 'react'

const ThemeSwap = () => {

    // Check if dark mode is enabled in sessionStorage
    const [darkMode, setDarkMode] = useState(() => sessionStorage.getItem("darkMode") === "enabled");

    // Toggle dark mode and update sessionStorage
    const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      sessionStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
    };
  
    // Update the class on <html> element
    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

  return (
    <div className="z-50 fixed bottom-0 right-0 m-4">
    <label className="relative inline-block w-[60px] h-8">
    <input onClick={toggleDarkMode} type="checkbox" className="peer hidden" />
    <span
      className="absolute cursor-pointer inset-0 bg-gray-300 rounded-[34px] transition duration-300 peer-checked:bg-[#242424]">
    </span>
    <span
      className="absolute h-6 w-6 bg-white rounded-full bottom-1 left-1 transition-transform duration-300 peer-checked:translate-x-7">
    </span>
    </label>
    </div>
  )
}

export default ThemeSwap