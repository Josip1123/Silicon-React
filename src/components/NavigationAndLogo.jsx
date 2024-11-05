import { Link, NavLink } from "react-router-dom"
import Logo from "/assets/img/Logo.svg"
import { HashLink } from "react-router-hash-link"

function NavigationAndLogo() {

    return (
        <>
            <div className="logo-container">
                <Link to="/" aria-label="Link to home page"
                ><img
                        src={Logo}
                        alt="Silicon Brand Logo"
                        className="logo-img"
                    />
                </Link>
                <Link
                    to="/"
                    className="logo-text"
                    aria-label="Link to home page"
                >
                    <h2>Silicon</h2>
                </Link>
            </div>
            <nav className="main-navigation">
                <HashLink smooth to="/#brands" aria-label="Application features">
                    Features
                </HashLink>


                <NavLink to="/contact" aria-label="Application features"
                >Contact Us
                </NavLink>
            </nav>
        </>
    )
}

export default NavigationAndLogo