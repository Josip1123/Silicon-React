import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function MobileMenu({ isMenuVisible, reset }) {
    return (
        <ul className={`menu-collapsed ${isMenuVisible ? 'menu-shown' : ''}`}>
            <li onClick={reset}>
                <Link to="/">Home</Link></li>
            <li onClick={reset}>
                <HashLink smooth to="/#features">Features</HashLink>
            </li>
            <li onClick={reset}>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    )

}

export default MobileMenu