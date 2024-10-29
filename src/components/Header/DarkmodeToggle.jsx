function DarkmodeToggle() {
  return (
    <label className="switch">
      <span className="darkmode-text">Dark Mode</span>
      <input
        className="darkmode-toggle"
        type="checkbox"
        aria-label="toggle dark mode"
      />
      <span className="slider round"></span>
    </label>
  )
}

export default DarkmodeToggle