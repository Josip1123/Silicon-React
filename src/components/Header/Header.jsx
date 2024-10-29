import NavigationAndLogo from "./NavigationAndLogo"
import DarkmodeToggle from "./DarkmodeToggle"
import MenuBtn from "./MenuBtn"

function Header() {
    return (

        <header>
            <div className="header-container">
                <NavigationAndLogo/>
                <DarkmodeToggle/>
                <MenuBtn/>
            </div>
        </header>
    )
}

export default Header