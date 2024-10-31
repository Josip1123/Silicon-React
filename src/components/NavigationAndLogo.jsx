import { Link, NavLink } from "react-router-dom"
import Logo from "/assets/img/Logo.svg"
import { NavHashLink } from "react-router-hash-link"

function NavigationAndLogo() {
    return (
        <>
            <div className="logo-container">
                <Link to="/home" aria-label="Link to home page"
                ><img
                        src={Logo}
                        alt="Silicon Brand Logo"
                        className="logo-img"
                    />
                </Link>
                <Link
                    to="/home"
                    className="logo-text"
                    aria-label="Link to home page"
                >
                    <h2>Silicon</h2>
                </Link>
            </div>
            <nav className="main-navigation">
                <NavHashLink activeClassName="selected" smooth to="/home/#brands" aria-label="Application features">
                    Features
                </NavHashLink>


                <NavLink to="/contact" aria-label="Application features"
                >Contact Us
                </NavLink>
            </nav>
        </>
    )
}

export default NavigationAndLogo