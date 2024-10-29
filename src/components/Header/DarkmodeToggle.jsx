// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"


function DarkmodeToggle() {
  const localTheme = localStorage.getItem("theme") === "true"
  const [isDarkMode, setDarkMode] = useState(localTheme)

  if (isDarkMode) {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }


  function toggleDarkmode() {

    setDarkMode((prevMode) => {

      const updatedMode = !prevMode;

      if (updatedMode) {
        document.body.classList.add("dark-mode")
      } else {
        document.body.classList.remove("dark-mode")
      }


      localStorage.setItem("theme", `${updatedMode}`)

      return updatedMode
    });
  };

  return (
    <label className="switch">
      <span className="darkmode-text">{isDarkMode ? `Light mode` : `Dark mode`}</span>
      <input
        className="darkmode-toggle"
        type="checkbox"
        aria-label="toggle dark mode"
        onChange={toggleDarkmode}
        checked={isDarkMode}
      />
      <span className="slider round"></span>
    </label>
  )
}

export default DarkmodeToggle