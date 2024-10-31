
function HeroHeading() {
  return (
    <>
      <h1 className="hero-heading">
        Manage All Your
        <br />
        Money in One App
      </h1>
      <div className="hero-content">
        <p className="hero-text">
          We offer you a new generation of the mobile banking.
          Save, spend & manage money in your pocket.
        </p>
        <div className="app-store-container">
          <a
            href="#"
            className="app-store btn"
            aria-label="download app on the app store"
          >
          </a>
          <a
            href="#"
            className="google-play btn"
            aria-label="download app on the play store"
          >
          </a>
        </div>
        <a href="#" className="discover-more">
          <span className="material-symbols-outlined down-arrow">
          </span>
          Discover more
        </a>
      </div>

    </>
  )
}

export default HeroHeading