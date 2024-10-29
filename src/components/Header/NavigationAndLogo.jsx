import Logo from "/assets/img/Logo.svg"

function NavigationAndLogo() {
    return (
        <>
            <div className="logo-container">
                <a href="#" aria-label="Link to home page"
                ><img
                        src={Logo}
                        alt="Silicon Brand Logo"
                        className="logo-img"
                    />
                </a>
                <a
                    href="#"
                    className="logo-text"
                    aria-label="Link to home page"
                >
                    <h2>Silicon</h2>
                </a>
            </div>
            <nav className="main-navigation">
                <a href="#features" aria-label="Application features"
                >Features</a
                >
                <a href="#features" aria-label="Application features"
                >Contact Us</a
                >
            </nav>
        </>
    )
}

export default NavigationAndLogo